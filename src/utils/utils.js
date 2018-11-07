import moment from 'moment'

export default {
  dateFormat: "YYYY-MM-DD",
  timeFormat: "HH:mm:ss",
  dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
  getParameterByName (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  getContextPath () {
    let hostIndex = location.href.indexOf(location.host) + location.host.length;
    if(location.href.indexOf('/', hostIndex + 1) !== -1){
      return location.href.substring(hostIndex, location.href.indexOf('/', hostIndex + 1));
    } else {
      return "";
    }
  },
  parseDateTime: function(str){
    return moment(str, this.dateTimeFormat).unix();
  },
  formatDateTime: function(time){
    if(typeof time === 'undefined') return '';
    return moment(new Date(time)).format(this.dateTimeFormat);
  },
  formatNow: function(){
    return moment(new Date()).format(this.dateTimeFormat);
  },
  fix2Length: function(number){
    if(number >= 0 && number < 10){
      return '0' + number;
    } else {
      return '' + number;
    }
  },
  numUnit: [' ', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
  formatBytes (bytes, decimals){
    if(typeof bytes === 'undefined') return '';
    if(bytes === 0) return '0 ';
    let k = 1024;
    let dm = decimals || 1;
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    if(i < 0) i = 0;
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + this.numUnit[i];
  },
  formatNumber (bytes, decimals){
    if(typeof bytes === 'undefined') return '';
    if(bytes === 0) return '0 ';
    let k = 1000;
    let dm = decimals || 1;
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    if(i < 0) i = 0;
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + this.numUnit[i];
  },
  formatSpeed (bytes, decimals){
    if(typeof bytes === 'undefined') return '';
    if(bytes === 0) return '0 ';
    return this.formatNumber(bytes * 1000000, decimals);
  },
  isCut (str, cutoff = 10){
    if(str){
      return str.length > cutoff;
    }else{
      return false;
    }
  },
  cutString (str, cutoff = 10, html){
    if(str){
      return str.length < cutoff ? str : html ? str.substr(0, cutoff-1) + '&#8230;' : str.substr(0, cutoff-1) + '...';
    } else {
      return "";
    }
  },
  getKeys (obj){
    if(Object.keys){
      return Object.keys(obj);
    }else{
      let keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      return keys;
    }
  },
  isDefined (obj){
    return typeof obj !== "undefined" && obj !== null;
  },
  isFunction (obj) {
    return this.isDefined(obj) && typeof obj === "function";
  },
  isPositive (num){
    return !Number.isNaN(num) && num > 0;
  },
  isNegative (num){
    return !Number.isNaN(num) && num < 0;
  },
  isIpv4 (ipv4){
    return (/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(ipv4));
  },
  isIpv4Mask (ipv4Mask){
    let ip = ipv4Mask.split("/");
    if(ip.length !== 2){
      return false;
    }

    if(!this.isIpv4(ip[0])){
      return false;
    }
    
    if(ip[1] < 1 || ip[1] > 128){
      return false;
    }
    
    return true;
  },
  isIpv6 (ipv6){
    return (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\:){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(ipv6));
  },
  isIpv6Mask (ipv6Mask) {
    let ip = ipv6Mask.split("/");
    if (ip.length !== 2){
      return false;
    }

    if (!this.isIpv6(ip[0])) {
      return false;
    }

    if(ip[1] < 1 || ip[1] > 128){
      return false;
    }
    
    return true;
  },
  isIp (ip){
    return (this.isIpv4(ip) ? true : this.isIpv6(ip));
  },
  isIpMask (ipMask){
    return (this.isIpv4Mask(ipMask) ? true : this.isIpv6Mask(ipMask));
  },
  setInputPositive (inputId){
    $(inputId).keypress(function(e) {
      if($(inputId).val().length === 0 && e.which === 48){
        return false;
      }
      // if the letter is not digit then display error and don't type anything
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
        return false;
      }
    });
  },
  getFunction (args, index){
    if(Array.isArray(args)){
      if(!this.isDefined(index)) index = 0;
      let func = args.filter(function(arg){
        return typeof arg === "function";
      });
      
      if(func.length > index){
        return func[index];
      }
    }
  },
  uuid (nodash){
    let uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );

    if(nodash) {
      uuid = uuid.replace(/-/g, '');
    }

    return uuid;
  },
  snakeToString (snake) {
    let splitStr = snake.split('_');
    let str = '';
    splitStr.forEach((element, index) => {
      let word = element.trim();
      if(word.length > 0){
        if(word.length > 1){
          str += word.charAt(0).toUpperCase();
        }else{
          str += word.charAt(0);
        }

        if(word.length > 1){
          str += word.slice(1);
        }

        if(splitStr.length !== index + 1){
          str += ' ';
        }
      }
    });

    return str;
  },
  removeSpaces (str) {
    let nonSpace = str.replace(/\s/g, '');
    return nonSpace;
  },
  isInclude(obj, keys, value) {
    let result = false;
    keys.some(key => {
      result = ((typeof obj[key] === 'string') && obj[key].indexOf(value) > -1);
      return result;
    });

    return result;
  },
  createArray (length, initValue) {
    let array = Array.apply(null, Array(length));
    array.fill(initValue);
    return array;
  },
  pushArray (array, newValue) {
    array.shift();
    let newArray = array.slice(0);
    newArray.push(newValue);
    return newArray;
  },
  downloadBlob(blobData, fileName) {
    if(!fileName) {
      return;
    }
    var blob = window.URL.createObjectURL(new Blob([blobData]));
    this.download(blob, fileName);
  },
  downloadJson(exportObj, exportName){
    if(!exportName) {
      exportName = 'prism_download.json';
    }else if(!exportName.endsWith('.json')) {
      exportName = exportName + '.json';
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    this.download(dataStr, exportName);
  },
  downloadSvg(svgId, exportName, style){
    if(!exportName) {
      exportName = 'prism_download.svg';
    }else if(!exportName.endsWith('.svg')) {
      exportName = exportName + '.svg';
    }
    
    var svg = document.getElementById(svgId);
    // get svg source.
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);
    // add name spaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    if(style) {
      let svgEndTagIndex = source.indexOf('</svg>');
      source = [source.slice(0, svgEndTagIndex), style, source.slice(svgEndTagIndex)].join('');
    }
    // add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    // convert svg source to URI data scheme.
    var dataStr = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    this.download(dataStr, exportName);
  },
  download (data, exportName) {
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", data);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  },
  isMasterController(haState) {
    return (haState === 'master' || haState === 'noha' || haState === 'none');
  },
  objectToString(obj) {
    let keys = Object.keys(obj);
    let str = '';
    keys.forEach((key, index) => {
      if(obj[key]) {
        str = str + this.snakeToString(key) + ': ' + obj[key];
        if(index < keys.length - 1) {
          str = ', ';
        }
      }
    });

    return str;
  }
};
