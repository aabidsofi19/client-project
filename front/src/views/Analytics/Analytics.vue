<template>
  <div>
    <div class="main-wrapper">
      <b-row v-if="mors" style="margin-top: 33px" class="chart-stats">
        <b-col sm="3">
          <div
            class="btn-group"
            style="display: block; margin: 10px auto 0; text-align: center"
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
        </b-col>
        <div class="row">
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Track Amount</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Stream Amount</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Spotify Followers</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Listeners</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Playlists</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
        </div>
      </b-row>
      <b-row v-if="!mors" style="margin-top: 33px" class="chart-stats">
        <b-col sm="3">
          <div
            class="btn-group"
            style="display: block; margin: 10px auto 0; text-align: center"
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
        </b-col>
        <div class="row">
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Post Amount</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Followers</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Likes</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Reach</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
          <div class="col-md-2" style="margin-right:10px;">
            <div class="form-wrapper">
              <div class="col-md-12" style="text-align: center">
                <span class="claim-content">Conversation</span>
              </div>
              <div class="col-md-12" style="text-align: center">
                <span class="claim-title">+100,000</span>
              </div>
            </div>
          </div>
        </div>
      </b-row>

      <div class="nav nav-tabs tab-backgroud typee active-letter" id="nav-tab" role="tablist">
        <a
          v-on:click="mors=true"
          class="nav-item nav-link active"
          id="nav-music-tab"
          color="white"
          data-toggle="tab"
          href="#nav-detail"
          role="tab"
          aria-controls="nav-detail"
          aria-selected="true"
          >Music</a
        >
        <a
          v-on:click="mors=false"
          class="nav-item nav-link"
          id="nav-activity-tab"
          data-toggle="tab"
          href="#nav-activity"
          role="tab"
          aria-controls="nav-activity"
          aria-selected="false"
          >Socials</a
        >
      </div>
      <!-- <b-row style="margin-bottom:10px;">
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content">Streams</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title">(490 + 5)</span>
            </div>
          </div>
        </b-col>
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content">Followers</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title">(5100 + 29)</span>
            </div>
          </div>
        </b-col>
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content">Listeners</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title">- 0.4%</span>
            </div>
          </div>
        </b-col>
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content">Playlists</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title">- 0.4%</span>
            </div>
          </div>
        </b-col>
        <b-col class="stats" sm="2">
          <div class="form-wrapper">
            <div class="col-md-12" style="text-align: center">
              <span class="claim-content">Views</span>
            </div>
            <div class="col-md-12" style="text-align: center">
              <span class="claim-title">- 0.4%</span>
            </div>
          </div>
        </b-col>
      </b-row> -->

      <Chart
        v-bind:artist="
          artists.filter((artist) => artist.id === selectedID)[0][selectedKind]
        "
      />
      
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";

export default {
  name: "analytics",
  components: {
    Chart,
  },
  data() {
    return {
      artists: [
        {
          id: 1,
          name: "Post malon",
          music: {
            followers: [5001, 6000, 6000, 6005, 8000, 8008, 9000],
            views: [50000, 6000, 60, 6005, 8000, 8008, 9200],
            reach: [50000, 2000, 9000, 6005, 8000, 308, 9000],
          },
          socials: {
            followers: [500, 6000, 6000, 6005, 8000, 8008, 9000],
            views: [50000, 6000, 60, 6005, 8000, 8008, 9200],
            reach: [50000, 2000, 9000, 6005, 80000, 308, 9000],
          },
        },
        {
          id: 2,
          name: "The weeknd",
          music: {
            followers: [54440, 6000, 6000, 6005, 8000, 8008, 9000],
            views: [50000, 6000, 60, 6005, 8000, 8008, 9200],
            reach: [50, 2000, 9000, 6005, 8000, 308, 9000],
          },
          socials: {
            followers: [500, 6000, 6000, 6005, 8000, 8008, 9000],
            views: [50000, 6000, 60, 6005, 8000, 8008, 9200],
            reach: [50000, 2000, 9000, 6005, 80000, 308, 9000],
          },
        },
      ],
      mors:true,
      selectedID: 1,
      selectedKind: "music",
    };
  },
  methods: {
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
  background-color: #001f3d;
}
/* #nav-tab a {
  font-weight: bold;
}

#nav-tab a:active {
  color: black;
  font-weight: bold;
} */

a{
  color:white;
}

a:visited{
  color: #001f3d;
}



#nav-music-tab:active{
  color: #001f3d;
}
.active-letter:active {
  color: black;
  font-weight: bold;
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

/* .artist-menu{
  cursor: pointer;
  color:#001f3d ;
}
.artist-menu:active{
  color:#001f3d ;
}

#nav-item .nav-link .artist-menu:active{
  color:#001f3d ;
}

#nav-tab a:active{
  
} */


</style>
