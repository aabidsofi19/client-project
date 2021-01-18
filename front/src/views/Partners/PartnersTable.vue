<template>
    <!-- <div class="finance-table">
        <b-table  style="margin-top:10px; margin-right:10px;" striped bordered hover :items="items"></b-table>
    </div> -->
    <table class="table table-striped table-hover table-top">
		<thead>
			<tr>
				<th>Name</th>
				<th>Role</th>
				<th>Email</th>
				<th>Edit</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in items" :key="item.id">
				<td>{{item.Name}}</td>
				<td>{{item.Role}}</td>
				<td>{{item.Email}}</td>
				<td>
					<label class="form-checkbox">
                        <div class="edit-icon">
                            <i class="fas fa-pencil-alt"></i>
                        </div>
    					<!-- <input type="checkbox" :value="item.id" v-model="selected"> -->
						<!-- <i class="form-icon"></i> -->
  					</label>
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
    name:'partnertable',
    data: () => ({
        items: [
          { id:'1mh', Name: "Mohamed Homm", Role: 'Artist', Email: 'example@gmail.com' },
          { id:'2mh', Name: "Oussam Azzaz", Role: 'Doctor', Email: 'example@gmail.com' },
          { id:'3mh', Name: "kaki moha", Role: 'Programmer', Email: 'example@gmail.com' },
        ],
        // items: [
        //   {id:'1mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
        //   {id:'2mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
        //   {id:'3mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
        //   {id:'4mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
        // ],
		selected: [],
		selectAll: false
    }),
	methods: {
		select() {
			this.selected = [];
			if (!this.selectAll) {
				for (let i in this.items) {
					this.selected.push(this.items[i].id);
				}
			}
		}
	}
}
</script>
<style scoped>
.table-top{
    margin-top:25px;
}
.edit-icon{
    cursor:pointer;
}
.edit-icon:hover{
    color:white;
}

</style>