export let settings2 = {
  columns: {
    id: {
      title: 'Enquiry No',
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
      filter: false
    },
    Date: {
      title: 'Date',
      filter: true
    },
    Email: {
      title: 'Email',
      filter: true
    },
    Phone: {
      title: 'Phone',
      filter: true
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
    AbandonedAt: '',
    Amount: '800',
    Date: '30/03/2020',
    Email: 'abc@gmail.com',
Phone: '7894561230'
  },
  {
    id: 2,
    CustomerName: 'Graham',
    ProductName: 'phant',
    AbandonedAt: '',
    Amount: '1000',
    Date: '30/03/2020',
    Email: 'abc@gmail.com',
    Phone: '7894561230'
  },
  {
    id: 3,
    CustomerName: 'selva ',
    ProductName: 'tshirt',
    AbandonedAt: '',
    Amount: '800',
    Date: '30/03/2020',
    Email: 'abc@gmail.com',
Phone: '7894561230'
  },
  {
    id: 4,
    CustomerName: 'kumar',
    ProductName: 'phant',
    AbandonedAt: '',
    Amount: '1000',
    Date: '30/03/2020',
    Email: 'abc@gmail.com',
Phone: '7894561230'
  },
];
