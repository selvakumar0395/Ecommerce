export let settings2 = {
  columns: {
    id: {
      title: 'OrderNo',
      filter: true
    },
    CustomerName: {
      title: 'CustomerName',
      filter: true
    },
    ProductName: {
      title: 'ProductName',
      filter: true
    },
    Amount: {
      title: 'Amount',
      filter: true
    },
    Date: {
      title: 'Date',
      filter: true
    },
    Payment: {
      title: 'payment',
      filter: false
    }
  },
  edit: {
    editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
  delete: {
    deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  }
};
export let data = [
  {
    id: 1,
    CustomerName: 'Leanne Graham',
    ProductName: 'shirt',
    Amount: '800',
    Date: '30/03/2020',
    Payment: 'COD',
  },
  {
    id: 2,
    CustomerName: 'Graham',
    ProductName: 'phant',
    Amount: '1000',
    Date: '30/03/2020',
    Payment: 'Online',
  },
  {
    id: 3,
    CustomerName: 'selva ',
    ProductName: 'tshirt',
    Amount: '800',
    Date: '30/03/2020',
    Payment: 'COD',
  },
  {
    id: 4,
    CustomerName: 'kumar',
    ProductName: 'phant',
    Amount: '1000',
    Date: '30/03/2020',
    Payment: 'Online',
  },
];
