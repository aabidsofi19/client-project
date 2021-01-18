<template>
  <div>
    <div class="main-wrapper">
      <b-row style="margin-top: 33px" class="chart-stats">
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center;">
              <span class="claim-content" style="font-size:23px">4</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title" style="font-weight:bold">Open Invoices</span>
            </div>
          </div>
        </b-col>
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content" style="font-size:23px">1</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title" style="font-weight:bold">Over Due</span>
            </div>
          </div>
        </b-col>
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content" style="font-size:23px">3</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title" style="font-weight:bold">To be paid</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row style="margin-top: 33px" class="chart-stats">
        <b-col sm="2" style="padding-left:25px;">
            <div class="col-sm-12">
                <div class="row">
                    <div class="btn-group" style="padding-left: 10px">
                        <button
                        type="button"
                        class="btn btn-default new-btn"
                        @click="$refs.NewInvoiceModal.openModal()"
                        >
                        + New Invoice
                        </button>
                    </div>
                </div>
            </div>
        </b-col>
        <b-col sm="2">
          <div
            class="btn-group"
            style="display: block; margin-left:20px;"
          >
            <button type="button" class="btn btn-default analyze-header pick-artist-btn">
              Pick Artist
            </button>
            <button class="btn btn-default analyze-header pick-artist-btn" data-toggle="dropdown">
              <span class="fa fa-caret-down"></span>
            </button>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                v-bind:key="artist.id"
                v-for="artist in artists"
                >{{ artist.name }}</a
              >
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row style="margin-top: 13px" class="finance-table">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Amount</th>
              <th>Partner</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>DL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{item.Name}}</td>
              <td>{{item.Artist}}</td>
              <td>{{item.Amount}}</td>
              <td>{{item.DueDate}}</td>
              <td>{{item.Partner}}</td>
              <td>
                <label class="form-checkbox">
                    <input type="checkbox" :value="item.id" v-model="selected">
                    <i class="form-icon"></i>
                </label>
              </td>
              <td>
                <button class="btn btn-default" 
                  @click="$refs.DownloadModal.openModal()"
                >
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-row>
    </div>
    <NewInvoiceModal ref="NewInvoiceModal">
        <template v-slot:header>
            <h1>New Invoice</h1>
        </template>

        <template v-slot:body>
          <div class="btn-group"
                  style="display: block; margin-bottom:10px;"
                >
                  <button type="button" class="btn btn-default analyze-header pick-artist-btn">
                    Pick Artist
                  </button>
                  <button
                    class="btn btn-default analyze-header pick-artist-btn"
                    data-toggle="dropdown"
                  >
                    <span class="fa fa-caret-down"></span>
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      v-bind:key="artist.id"
                      v-for="artist in artists"
                      >{{ artist.name }}</a
                    >
                  </div>
          </div>
                <div class="row">
                <div class="col-md-12">
                    <div class="selectBoxTitle" style="color:#001f3d">Name</div>
                    <div class="form-input">
                        <input type="text" />
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-12">
                    <div class="selectBoxTitle" style="color:#001f3d">Amount</div>
                    <div class="form-input">
                    <input type="text" />
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-12">
                    <div class="selectBoxTitle" style="color:#001f3d">Partner Name</div>
                    <div class="form-input">
                    <input type="text" />
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-12">
                    <div class="selectBoxTitle" style="color:#001f3d">Due Date</div>
                    <div class="form-input">
                    <input type="text" />
                    </div>
                </div>
                </div>
                
        </template>

        <template v-slot:footer>
            <div>
                <div class="row">
                    <div class="col-md-1" style="margin-top: 10px; margin-right: 90px">
                        <input
                        type="submit"
                        value="Cancel"
                        class="search-btn"
                        data-toggle="modal"
                        data-target="#myModal"
                        />
                    </div>
                    <div class="col-md-1" style="margin-top: 10px; padding-right: 10px">
                        <input type="submit" value="Save" class="search-btn" />
                    </div>
                </div>
            </div>
        </template>
    </NewInvoiceModal>
    <DownloadModal ref="DownloadModal">
        <template v-slot:header>
            <h6>Select Download Style</h6>
        </template>

        <template v-slot:body>
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <label class="radio-inline"><input type="radio" name="optradio" class="p-info" checked>  Word File</label>
                
              </div>
              <div class="col-md-6">
                <label class="radio-inline"><input type="radio" name="optradio" class="p-info" checked>  PDF File</label>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
            <div>
                <div class="row">
                    <div class="col-md-1" style="margin-top: 10px; margin-right: 90px">
                        <input type="submit" value="Download" class="search-btn" />
                    </div>
                    <div class="col-md-1" style="margin-top: 10px; padding-right: 10px">
                        <input type="submit" value="Cancel" class="search-btn" />
                    </div>
                </div>
            </div>
        </template>
    </DownloadModal>
  </div>
</template>

<script>
// import NewInvoiceButton from "./NewInvoiceButton";
// import FinanceTable from "./FinanceTable";
import NewInvoiceModal from "./NewInvoiceModal";
import DownloadModal from "./DownloadModal";

export default {
  name: "analytics",
  components: {
    // FinanceTable,
    NewInvoiceModal,
    DownloadModal,
  },
  data() {
    return {
      items: [
          {id:'1mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
          {id:'2mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
          {id:'3mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
          {id:'4mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
        ],
      selected: [],
      selectAll: false,
      artists: [
        {
          id: 1,
          name: "Post malon"
        },
        {
          id: 2,
          name: "The weeknd",
        },
      ],
      selectedID: 1,
      selectedKind: "music",
      modalOpen: false,
      downloadModal: false,
    };
  },
  methods: {
    select() {
			this.selected = [];
			if (!this.selectAll) {
				for (let i in this.items) {
					this.selected.push(this.items[i].id);
				}
			}
		},
    setSelectedKind(val) {
      this.selectedKind = val;
    },
  },
};
</script>
<style scoped>
.chart-stats .stats div h5 {
  margin: 0;
}
.typee {
  width: 100%;
  margin: 30px auto 18px auto;
  /* max-width: 800px; */
}

.main-wrapper {
  padding-bottom: 25px !important;
}

/* new */
.analyze-header {
  background-color: white;
  border-color: white;
  color: #282828;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.claim-content {
  /* padding: 5px 5px 5px 5px; */
  font-size: 13px;
  font-weight: bold;
}
.claim-title {
  /* padding: 5px 5px 5px 5px; */
  font-size: 13px;
}
.form-wrapper {
  background-color: #fff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  width: 170px;
  display: block;
  margin: 0 auto;
}
.tab-backgroud {
  background-color: #c7deca;
}
#nav-tab a {
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
}
.finance-table{
    padding-left: 35px;
    padding-right: 35px;
}

.new-btn{
  background-color: #001f3d;
  border:none;
  font-weight: bold;
  color:white;  
}

.new-btn:hover{
  color:#001f3d;
  background-color: white;
}
.new-btn:active{
  color:#001f3d;
  border:none;
  background-color: white;
}

.pick-artist-btn{
  font-weight: bold;
  background-color: white;
  color:#001f3d;
}

.pick-artist-btn:hover{
  background-color: #001f3d;
  color: white; 
  font-weight: bold;
}
</style>
