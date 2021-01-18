<template>
    <div class="main-wrapper">
            <b-button class="btn btn-default new-btn" style="margin-top:30px;" @click="$refs.AddPartnerModal.openModal()"><i class="fas fa-plus"></i> &nbsp; &nbsp; Add partner</b-button><br/>
            <!-- <b-form-input style="margin-top:30px; width:280px; display:inline" v-model="text" :type="search" placeholder="Search partner"></b-form-input> &nbsp; -->
            <b-form-input style="margin-top:30px; width:280px; display:inline" placeholder="Search partner"></b-form-input> &nbsp;
            <input type="submit" value="Search" class="search-btn" />
            <PartnersTable />
            <!-- <b-table  style="margin-top:30px" striped bordered hover :items="items"></b-table> -->
            <AddPartnerModal ref="AddPartnerModal">
              <template v-slot:header>
                  <h1>Add Partner</h1>
              </template>

              <template v-slot:body>
                <div class="col-md-12">
                    <div class="selectBoxTitle" style="color:#001f3d;">Partner Name</div>
                    <div class="form-input">
                        <input type="text" />
                    </div>
                </div>
                <div class="col-md-12" style="margin-top:15px;">
                    <div class="selectBoxTitle" style="color:#001f3d;">Partner Email</div>
                    <div class="form-input">
                        <input type="text" />
                    </div>
                </div>
                <div class="col-md-12" style="margin-top:15px;">
                    <div class="selectBoxTitle" style="color:#001f3d;">CoC Number</div>
                    <div class="form-input">
                        <input type="text" />
                    </div>
                </div>
                <div class="col-md-12" style="margin-top:15px;">
                    <div class="selectBoxTitle" style="color:#001f3d;">Address</div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="Street Name, number"/>
                    </div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="City"/>
                    </div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="Country"/>
                    </div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="Zip code"/>
                    </div>
                </div>
                <div class="col-md-12" style="margin-top:15px;">
                    <div class="selectBoxTitle" style="color:#001f3d;">Payment Info</div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="Account holder"/>
                    </div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="Bank account number (IBAN)"/>
                    </div>
                    <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="BIC/Swift code"/>
                    </div>
                    <!-- <div class="form-input" style="margin-bottom:5px;">
                        <input type="text" placeholder="Zip code"/>
                    </div> -->
                </div>
                <!-- <div class="col-md-12">
                  <div class="btn-group" style="display: block; margin-top:10px; margin-bottom:10px;">
                    <button type="button" class="btn btn-default analyze-header" style="border-color:#EBEBEB; color:#001f3d;">
                      Role
                    </button>
                    <button class="btn btn-default analyze-header" data-toggle="dropdown" style="border-color:#EBEBEB">
                      <span class="fa fa-caret-down"></span>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" >Role 1</a>
                      <a class="dropdown-item" >Role 1</a>
                      <a class="dropdown-item" >Role 1</a>
                      <a class="dropdown-item" >Role 1</a>
                      <a class="dropdown-item" >Role 1</a>
                    </div>
                  </div>
                </div> -->
                <!-- <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="selectBoxTitle" style="color:#001f3d;">Url Name</div>
                      <div class="form-input">
                          <input type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="selectBoxTitle" style="color:#001f3d;">Paste Url</div>
                      <div class="form-input">
                          <input type="text" />
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- <div class="col-md-12">
                    <div class="selectBoxTitle" style="color:#001f3d;">Payment Method</div>
                </div>
                <div class="col-md-12">
                  <div class="col-md-6">
                    <label class="radio-inline"><input type="radio" name="optradio" class="p-info" checked><img src="../../assets/logo/paypal.png" width="50px" height="35px"/></label>
                    
                  </div>
                  <div class="col-md-6">
                    <label class="radio-inline"><input type="radio" name="optradio" class="p-info" checked><img src="../../assets/logo/master_card.png" width="50px" height="35px"/></label>
                  </div>
                  <div class="col-md-6">
                    <label class="radio-inline"><input type="radio" name="optradio" class="p-info" checked><img src="../../assets/logo/visa.png" width="50px" height="50px"/></label>
                  </div>
                </div> -->
                      
              </template>

              <template v-slot:footer>
                  <div>
                      <div class="row " style="padding-left:20px">
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
            </AddPartnerModal>
    </div>
</template>
<script>
import PartnersTable from "./PartnersTable";
import AddPartnerModal from "./AddPartnerModal";
export default {
    name:'partner',
    components: {
      AddPartnerModal,
      PartnersTable,
    },
    data() {
      return {
        items: [
          { Name: "Mohamed Homm", Role: 'Artist', Email: 'example@gmail.com' },
          { Name: "Oussam Azzaz", Role: 'Doctor', Email: 'example@gmail.com' },
          { Name: "kaki moha", Role: 'Programmer', Email: 'example@gmail.com' },
        ]
      }
    }
}
</script>
<style scoped>
.search-btn{
    display: inline;
}

.p-info{
  margin-right:20px;
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
  border:none;
  background-color: white !important;
  color:#001f3d !important;
}
</style>