export default {
    userId(value) {
        return new RegExp(/^[a-z0-9_\-]{5,20}$/).test(value); // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)
    },
    password(value) {
        return new RegExp(/^[A-Za-z0-9~!@#$%^&*()_+|<>?:{}]{8,16}$/).test(value); // 8~16자 영문 대 소문자, 숫자, 특수문자
    },
    email(value) {
        return new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i).test(value); // email 포맷
    },
    mobile(value) {
        if(value.indexOf('-') === -1) {
            value = value.substring(0, 3) + '-' + value.substring(3, value.length - 4) + '-' + value.substring(value.length - 4);
        }
        return new RegExp(/^\d{3}-\d{3,4}-\d{4}$/).test(value) || new RegExp(/^\+\d{2,3}-\d{3}-\d{3,4}-\d{4}$/).test(value); // +(국가코드)-(숫자)-(숫자)-(숫자) | (숫자)-(숫자)-(숫자)
    },
    title (value) {
        return true;   
    },
    vRouterName (value) {
        return new RegExp(/^[A-Za-z0-9_\-]{1,10}$/).test(value); // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)
    },
    name (value) {
        return new RegExp(/^[a-z0-9_]{1,10}$/).test(value); // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)
    },
    vlanId (value) {
        return value >= 1 && value <=4094;
    },
    ip (value) {
        return this.ipv4(value) || this.ipv6(value);
    },
    ipv4RegEx: new RegExp(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/),
    ipv6RegEx: new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\:){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/),
    ipv4Mask (value) {
        let ip = value.split("/");
        let valid = ip.length === 2 ? this.ipv4RegEx.test(ip[0]) : false;
        if(valid) {
            valid = ip[1] >=0 && ip[1] <=32;
        }
        return valid;
    },
    ipv4 (value) {
        return this.ipv4Mask(value);
    },
    ipv6 (value) {
        return this.ipv6RegEx.test(value);
    },
    ipNetmask (value) {
        if(Array.isArray(value)) {
            for(let i = 0; i < value.length; i++) {
                if (!this.ipv4Mask(value[i])) {
                    return false;
                }
            }
            return true;
        } else {
            return this.ipv4Mask(value);
        }
    },
    gateway (value, ipNetmask) {
        let valid = this.ipv4RegEx.test(value);
        if (valid && ipNetmask) {
            if(Array.isArray(ipNetmask)) {
                for(let i = 0; i < ipNetmask.length; i++) {
                    valid = ipNetmask.startsWith(value);
                    if(valid) {
                        break;
                    }
                }
            } else {
                valid = ipNetmask.startsWith(value);
            }
        }

        return valid;
    },
    routerId (value) {
        return this.ipv4RegEx.test(value);
    },
    int2ip (ipInt) {
        return ((ipInt>>>24) +'.' + (ipInt>>16 & 255) +'.' + (ipInt>>8 & 255) +'.' + (ipInt & 255));
    },
    ip2Int (ip) {
        return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10) }, 0) >>> 0;
    },
    sameBandwidth (ipMask, otherIpMask) {
        let subnet1 = this.ip2Int(ipMask.substring(0, ipMask.indexOf('/')));
        let bits1 = parseInt(ipMask.substring(ipMask.indexOf('/') + 1));
        let mask1 = -1 << (32 - bits1);
        let subnet2 = this.ip2Int(otherIpMask.substring(0, otherIpMask.indexOf('/')));
        let bits2 = parseInt(otherIpMask.substring(otherIpMask.indexOf('/') + 1));
        let mask2 = -1 << (32 - bits2);
        return (subnet1 & mask1) == (subnet2 & mask2);
    },
    network (value, option = true) {
        let prefix = value.map(item => item.prefix);
        let valid = option;
        for(let i = 0; i < prefix.length; i++) {
            let ipMask = prefix[i];
            valid = this.networkPrefix(prefix[i]);
            if(!valid) {
                break;
            } else {
                for(let j = 0; j < prefix.length; j++) {
                    if(i !== j && prefix[j]) {
                        valid = !this.sameBandwidth(ipMask, prefix[j]);
                        if(!valid) {
                            break;
                        }
                    }
                }
                if(!valid) {
                    break;
                }
            }
        }

        if(valid) {
            for(let i = 0; i < value.length; i++) {
                valid = value.area && this.networkAreaId(value.area);
                if(!valid) {
                    break;
                }
            }
        }

        return valid;
    },
    networkPrefix (value) {
        return this.ipv4Mask(value);
    },
    networkAreaId (value) {
        return this.ipv4RegEx.test(value);
    },
    area (value, option = true) {
        let valid = option;
        for(let i = 0; value.length; i++) {
            valid = this.areaId(value[i].id) && this.areaRange(value[i].range);
            if(!valid) {
                break;
            }
        }

        return valid;
    },
    areaId (value) {
        if(Number.isInteger(value)) {
            return value >= 0 && value <= 4294967295;
        } else {
            return this.ipv4RegEx.test(value);
        }
    },
    areaRange (value) {
        return this.ipv4Mask(value);
    },
    neighbor (value) {
        return this.ipv4RegEx.test(value);
    },
    ipv4Prefix (value, option = true) {
        let valid = option;
        for(let i = 0; i < value.length; i++) {
            valid = this.ipv4PrefixIpAddress(value[i].ip_address) && this.ipv4PrefixSeq(value[i].seq);
            if(!valid) {
                break;
            }
        }

        return valid;
    },
    ipv4PrefixIpAddress (value) {
        return this.ipv4Mask(value);
    },
    ipv4PrefixSeq (value) {
        return !value ? true : value >= 0 && value <= 4294967295;
    },
    routeMap (value, option = true) {
        let valid = option;
        for(let i = 0; i < value.length; i++) {
            valid = this.routeMapName(value[i].name) && this.routeMapType(value[i].type) && this.routeMapSeq(value[i].seq);
            if(!valid) {
                break;
            }
        }

        return valid;
    },
    routeMapName (value) {
        return new RegExp(/^[A-Za-z0-9~!@#$%^&*()_+|<>?:{}]$/).test(value);
    },
    routeMapType (value) {
        return value === 'deny' || value === 'permit';
    },
    routeMapSeq (value) {
        return value >= 1 && value <= 66535;
    },
    // routerId 위에 함수 존재,
    asId (value) {
        return value >= 1 && value <= 65534;
    },
    prefix (value) {
        return this.ipv4Mask(value);
    },
    neighborIp (value) {
        return this.ipv4RegEx.test(value);
    },
    remoteAs (value) {
        return value >= 1 && value <= 65534;
    },
    aclNo (value) {
        return Number.isInteger(value);
    },
    sourceHost (value) {
        return value === 'any' || this.ipv4Mask(value);
    },
    sourcePort (value) {
        return value >= 0 && value <= 65535;
    },
    destinationHost (value) {
        return value === 'any' || this.ipv4Mask(value);
    },
    destinationPort (value) {
        return value >= 0 && value <= 65535;
    },
    ruleId (value) {
        return Number.isInteger(value);
    },
    meterBands (value, option = false) {
        let valid = option;
        for(let i = 0; i < value.length; i++) {
            valid = this.meterBandsBurstSize(value[i].burst_size) && this.meterBandsRate(value[i].rate);
            if(!valid) {
                break;
            }
        }

        return valid;
    },
    meterBandsBurstSize (value) {
        return value >= 0 && value <= 4294967295;
    },
    meterBandsRate (value) {
        return value >= 0 && value <= 4294967295;
    },
    inport (value, portCount) {
        return value >= 1 && value <= portCount;
    },
    // vlanId 위에 함수 존재,
    sourceIp (value) {
        return value === 'any' || this.ipv4Mask(value);
    },
    destiantionIp (value) {
        return value === 'any' || this.ipv4Mask(value);
    },
    // ruleId 위에 함수 존재,
    // meter bands 위에 함수 존재,
    controllerTcpPort (value) {
        return value >= 1 && value <= 65535;
    },
    sshPort (value) {
        return value >= 1 && value <= 65535;
    },
    toolSourceIp (value) {
        return this.ipv4RegEx.test(value);
    },
    toolDestinationIp (value) {
        return this.ipv4RegEx.test(value);
    },
    // password 위에 함수 존재,
    // email 위에 함수 존재,
    // mobile 위에 함수 존재,
    netmask(ipMask) {
        if(this.ipv4Mask(ipMask)){
            let ip = ipMask.split("/");
            switch(ip[1]) {
                case '8':
                    return ip[0].endsWith('.0.0.0');
                case '16':
                    return ip[0].endsWith('.0.0');
                case '24':
                    return ip[0].endsWith('.0');
                default:
                    return false;
            }
        } else {
            return false;
        }
    }
}
