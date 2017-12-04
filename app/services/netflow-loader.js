import Ember from 'ember';

export default Ember.Service.extend({
  getNetflow(ip) {

    let flowTypes = ['tx', 'rx'];

    // let data = $.getJSON(`https://jsonplaceholder.typicode.com/posts`);
    // let data = $.getJSON(`/data/sniffer_rx3.json`);
    // let data = $.getJSON(`http://10.101.108.154:7379/hkeys/frameGood`);
    let data = $.getJSON(`http://10.101.108.154:7379/hgetall/frameGood`);


    return data.then((json) => {

        // let records = [];
        // json.forEach(function (item) {
        //   records.push(item);
        // });
        // return records;



      //=============================//

      let doc = json;
      let sch = {"get":"frameDir,framePort,frameDMAC,frameSMAC,frameEthType,frameProto,frameSIP,frameDIP,frameSPORT,frameDPORT"};

      console.log(json);
      console.log(sch);

      function toSchema(sch)
      {
        console.log("in toSchema");
        return sch.split(",");
      }

      function recToJson(schema, r, count)
      {
        console.log("in rectoJSON");
        fs = r.split(",");

        obj = Object();

        for (var i = 0; i < schema.length; i++) {
          obj[schema[i]] = fs[i];
        }

        obj.count = count;
        return obj;
      }

      function docToJson(sch, doc)
      {
        sch = toSchema(sch.get);

        console.log("in doctojson func");

        ret = [];
        for (var key in doc.hgetall) {
          console.log("in loop ...");
          if(doc.hgetall.hasOwnProperty(key)){
            ret.push(recToJson(sch, key, doc.hgetall[key]));
          }

        }
        console.log(ret);
        return ret;
      }

      console.log(docToJson(sch, doc));

      return doc;



      });
  }
});
