import Ember from 'ember';

export default Ember.Controller.extend({
  dataSourceIps: ['10.101.108.156'],
  netflowService: Ember.inject.service('netflow-loader'),
  tableHeadings:['ID','DMAC','SMAC','TYPE','SIP','DIP'],
  dummydata: [
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:22, DIP:6},
    {ID:1, DMAC:2, SMAC:3, TYPE:4, SIP:5, DIP:6}

    ],
  tableData: null,
  alerts:null,


  init() {
    this._super(...arguments);
    this.send('initialiseTable');
    this.send('filterBySrcIp',22);
    this.send('initDummyAlerts');
    this.send('initAlertHistory');
    this.send('testService');
    this.set('selectedNetflowRecords', true);
  },
  actions:{
    testService(){

      //alert('calling your service');

      // this.get('netflowService').forEach(function (data) {
      this.get('netflowService').getNetflow('10.101.108.156').then((someData) => {
        alert("hiiii");
      });
        //.forEach(function (data) {

        //'10.101.108.156'


        // _this.get('projectsService').getProjects(`${Url}`).then((json) => {
        //   _this.set(`dash${Url}Data`, json);
        // });
      //});
    },
    updateView(param){



      this.set('selectedContent',null);
      //loop keys in array of navbar items (optimal solution)

      this.set('selectedAlertHistory', null);
      this.set('selectedDataVisualisation', null);
      this.set('selectedNetflowRecords', null);
      //this.set('selectedAlertHistory', true);
      //this.set('selectedContent.alertHistory', true);
      //this.set(`selectedContent.${param}`, true);

      switch (param) {
        case 'alertHistory':
          this.set('selectedAlertHistory', true);
          break;
        case 'dataVisualisation':
          this.set('selectedDataVisualisation', true);
          break;
        case 'netflowRecords':
          this.set('selectedNetflowRecords', true);
          break;
      }
    },

    initialiseTable(){
      let dummydata = this.get('dummydata');

      this.set('tableData',dummydata);
    },
    initDummyAlerts(){
      let alerts = [{
        warningTitle:"Traffic higher than usual across port 443", timestamp: "04-Dec-2017 11:21" , severity:'High'
      },{
        warningTitle:"Dummy alert 1", timestamp: "04-Dec-2017 09:21" , severity:'low'
      },{
        warningTitle:"Unknown IP introduced to network, please investigate", timestamp: "04-Dec-2017 15:54" , severity:'low'
      }]
      this.set('alerts', alerts);
    },
    initAlertHistory(){
      let alertHistory = [
        {
          warningTitle:"Traffic higher than usual across port 443", timestamp: "04-Dec-2017 11:21" , severity:'High'
        },{
          warningTitle:"Dummy alert 1", timestamp: "04-Dec-2017 09:21" , severity:'low'
        },{
          warningTitle:"Unknown IP introduced to network, please investigate", timestamp: "04-Dec-2017 15:54" , severity:'low'
        },{
          warningTitle:"Traffic higher than usual across port 443", timestamp: "04-Dec-2017 11:21" , severity:'High'
        },{
          warningTitle:"Dummy alert 1", timestamp: "04-Dec-2017 09:21" , severity:'low'
        },{
          warningTitle:"Unknown IP introduced to network, please investigate", timestamp: "04-Dec-2017 15:54" , severity:'low'
        },{
          warningTitle:"Traffic higher than usual across port 443", timestamp: "04-Dec-2017 11:21" , severity:'High'
        },{
          warningTitle:"Dummy alert 1", timestamp: "04-Dec-2017 09:21" , severity:'low'
        },{
          warningTitle:"Unknown IP introduced to network, please investigate", timestamp: "04-Dec-2017 15:54" , severity:'low'
        },{
          warningTitle:"Traffic higher than usual across port 443", timestamp: "04-Dec-2017 11:21" , severity:'High'
        },{
          warningTitle:"Dummy alert 1", timestamp: "04-Dec-2017 09:21" , severity:'low'
        },{
          warningTitle:"Unknown IP introduced to network, please investigate", timestamp: "04-Dec-2017 15:54" , severity:'low'
        },{
          warningTitle:"Traffic higher than usual across port 443", timestamp: "04-Dec-2017 11:21" , severity:'High'
        },{
          warningTitle:"Dummy alert 1", timestamp: "04-Dec-2017 09:21" , severity:'low'
        },{
          warningTitle:"Unknown IP introduced to network, please investigate", timestamp: "04-Dec-2017 15:54" , severity:'low'
        }
      ];

      this.set('alertHistory', alertHistory);
    },

    //filter data from the DB
    filterBySrcIp(param){
      if (param !== '') {

        let filteredList = [];

        this.get('dummydata').forEach(function (item, param) {
          //alert(item.SIP);
          // if(item.SIP == param) filteredList.push(item);

          // alert(typeof(item.SIP)); //returns NUMBER
          // alert(typeof(param)); //returns NUMBER

          //if(item.SIP == param) filteredList.push(item); //these are equal, but filteredList is not being populated
          if(item.SIP == 22) filteredList.push(item);


        });

        this.set('tableData', filteredList);


      } else {

        //keep the data from the database in another variable, then re-assign when we want to remove filtering in stead of making another
        //request to the database which would be a waste
        tableData.set('tableData','dummyData');

      }
    }
  }
  //have a function that populates list, called on load and called again on search input update


        // filterByCity(param) {
        //   if (param !== '') {
        //     return this.get('store').query('rental', { city: param });
        //     // return this.get('store').query('rental', { bedrooms: param });
        //
        //     //keep results synchronous(not async) with the input -> hence use of promise
        //     return this.get('store')
        //       .query('rental', { city: param }).then((results) => {
        //         return { query: param, results: results };
        //       });
        //
        //   } else {
        //     // return this.get('store').findAll('rental');
        //     //^ from async to sync with the user input to querying action
        //     return this.get('store')
        //       .findAll('rental').then((results) => {
        //         return { query: param, results: results };
        //       });
        //   }
        // }
});
