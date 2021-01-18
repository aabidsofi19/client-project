<template>
    <!-- <div class="finance-table">
        <b-table  style="margin-top:10px; margin-right:10px;" striped bordered hover :items="items"></b-table>
    </div> -->
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
						@click="$refs.NewInvoiceModal.openModal()"
					>
						Download
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
    name:'partner',
    data: () => ({
        items: [
          {id:'1mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
          {id:'2mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
          {id:'3mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
          {id:'4mh', Name: "Mohamed Homm", Artist:'Artist1', Amount: '€200', Partner: 'Partner 1', DueDate: '2020-12-23', Status:'false', DL:'' },
        ],
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