import React, { Component } from "react";
import Panel from "./Panel";

import { TOKENS } from "./constants/generalC";
import getProvider from "./util/getProvider";
import getEthGas from "./util/getEthGas";
import {converter} from "./util/generalU";
import {getTokenContract} from "./util/contractsU";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
      testBalance: 0,
      gbptBalance: 0,
      account: undefined,
      tx0: undefined
    };
  }

  getValue(value) {
    return value;
  }

  async componentDidMount() {
    this.provider = await getProvider();
    this.toEther = converter("ether");
    this.toXoy = converter(8);

    this.testToken = await getTokenContract(TOKENS.TEST, this.provider.getSigner(0));
    this.gbptToken = await getTokenContract(TOKENS.GBPT, this.provider.getSigner(0));

    let signer = await this.provider.getSigner(0);

    this.setState({
      account: await signer.getAddress()
    }, () => {
      this.load();
    });

    window.ethereum.on('accountsChanged', async () => {
      let signer = await this.provider.getSigner(0);

      this.setState({
        account: await signer.getAddress()
      }, () => {
        this.load();
      });
    });
  }

  async getBalance() {
    let weiBalance = await this.provider.getBalance(this.state.account);
    let testBalance = await this.testToken.balanceOf(this.state.account);
    let gbptBalance = await this.gbptToken.balanceOf(this.state.account);
    let ethGas = await getEthGas();

    this.setState({
      balance: this.toEther(weiBalance),
      testBalance: this.toXoy(testBalance),
      gbptBalance: this.toXoy(gbptBalance),
      ethGas: this.toEther(ethGas)
    });
  }

  async load() {
    this.getBalance();
  };

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h4 className="display-4">Trading Bot</h4>
        </div>

        <div className="row">
          <div className="col-sm">
            <Panel title="Balance">
              <p><strong>{this.state.account}</strong></p>
              <span><strong>ETH:</strong> {this.state.balance}</span><br />
              <span><strong>TEST:</strong> {this.state.testBalance.toString()}</span><br />
              <span><strong>GBPT:</strong> {this.state.gbptBalance.toString()}</span>
            </Panel>
            <Panel title="Gas">
              <span><strong>ETH gas:</strong> {this.state.ethGas}</span><br />
            </Panel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
