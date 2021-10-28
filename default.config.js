export default {
    server: {
        port: process.env.PORT || 8080,
        ip: process.env.BINDING_IP || '0.0.0.0',
        ssl: {
            enabled: process.env.SSL || false,
            key: '/path/cert.key',
            crt: '/path/cert.crt'
        }
    },
    logger: {
        level: process.env.LOGGER_LEVEL || 'ERROR',
        elastic: {
            enabled: process.env.ELASTIC_ENABLED || false,
            node: process.env.ELASTIC_NODE_URL,
            username: process.env.ELASTIC_USERNAME,
            password: process.env.ELASTIC_PASSWORD,
            indexes: {
                api: process.env.ELASTIC_API_INDEX || 'api'
            }
        }
    }
}