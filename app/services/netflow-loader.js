import Ember from 'ember';

export default Ember.Service.extend({
  getNetflow(ip) {

    let flowTypes = ['tx', 'rx'];

    // flowTypes.forEach((data)=>{
    //
    //
    // })

    // alert("in the service");

    // let data = $.getJSON(`http://${ip}/sniffer-${}.csv`);
    // let data = $.getJSON(`http://${ip}/sniffer-tx.csv`);

    //
    // let data = $.getJSON(`/data/sniffer-tx.csv`);
    //
    //
    // return data.then((csvData) => {
    //
    //   console.log(csvData);
    //   let records = [];
    //   csvData = csvData.split(',');
    //   csvData.forEach(function(item){
    //     records.push( { id: item} );
    //   });
    //
    //   //this.set('data', records);
    //   return records;
    // });

    console.log("fhfhfhfh");

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'public/data/sniffer-tx.csv', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        //successCallback(xhr.responseText);
        return xhr.responseText;
      } else {
        //failCallback(xhr.responseText);
        //this code fine,, change service setup so that you can test
      }
    };
    xhr.send();
  }
});
