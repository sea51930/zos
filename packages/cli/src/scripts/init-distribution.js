import PackageFilesInterface from '../utils/PackageFilesInterface'

const BASE_DISTRIBUTION = {
  contracts: {},
  kernel: {
    address: null
  }
}

async function initDistribution(name, kernelAddress, { from, packageFileName }) {
  if (name === undefined) throw 'Must provide a distribution name'
  if (kernelAddress === undefined) throw 'Must provide a kernel address'

  const files = new PackageFilesInterface(packageFileName)
  const zosPackage = BASE_DISTRIBUTION

  zosPackage.name = name
  zosPackage.kernel = { address: kernelAddress }
  files.write(zosPackage)
}

module.exports = initDistribution