class Registry {
  constructor() {
    this.services = [];
    this.time = 15;
  }

  // eslint-disable-next-line class-methods-use-this
  getKey(name, version, ip, port) {
    return name + version + ip + port;
  }

  register(name, version, ip, port) {
    const key = this.getKey(name + version + ip + port);

    if (!this.services[key]) {
      this.services[key] = {};
      // unregister services which succedded timeout
      this.services[key].timespamp = Math.floor(new Date() / 1000);

      this.services[key].ip = ip;
      this.services[key].port = port;
      this.services[key].name = name;
      this.services[key].version = version;
      console.log(`Added service ${name}, ${version} at ${ip}:${port}`);
      return key;
    }
    this.services[key].timespamp = Math.floor(new Date() / 1000);
    console.log(`Updated service ${name}, version${version} at ${ip}:${port}`);
    return key;
  }

  unregister(name, version, ip, port) {
    const key = this.getKey(name + version + ip + port);
    delete this.services(key);
    return key;
  }
}

module.exports = Registry;
