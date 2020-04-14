module.exports = {
    'gcp-cnci': {
        'name': 'gcp-cnci',
        'channel': 'gcp-cicd',
        'deploymentSourceBranch': 'master',
        'productionCandidateBranch': 'production-candidate',
        'repoLink': 'https://github.com/frenkzappa/gcp-cnci/',
        'productionTriggerId': 'push-to-production-candidate-branch',
        'stagingEnvUrl': 'http://35.240.43.119/',
        'productionEnvUrl': 'http://35.240.171.202/',
        'gcrImageId': 'gcp-cnci-example-app'
    }
}