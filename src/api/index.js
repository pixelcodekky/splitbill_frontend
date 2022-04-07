import axios from 'axios';

const domainName = 'http://localhost:8800';

const friendurl = `${domainName}/api/friend/`;

const ledgerurl = `${domainName}/api/ledger/`;
const expenseurl = `${domainName}/api/expense/`;

//Friend
export const friends = () => axios.get(`${friendurl}`);
export const fricreate = (objfri) => axios.post(`${friendurl}`,objfri);
export const friupdate = (objfri) => axios.put(`${friendurl}`, objfri);
export const fridelete = (objid) => axios.delete(`${friendurl}/${objid}`);

//Ledger
export const ledgers = () => axios.get(`${ledgerurl}`);
export const ledgercreate = (objledger) => axios.post(`${ledgerurl}`, objledger);
export const ledgerupdate = (objledger) => axios.put(`${ledgerurl}`, objledger);
export const ledgerdelete = (objId) => axios.delete(`${ledgerurl}/${objId}`);

//Expense
export const expensebyledger = (ledgerId) => axios.get(`${expenseurl}ledger/${ledgerId}`);
export const expensebyId = (Id) => axios.get(`${expenseurl}/${Id}`);
export const expensecreate = (objexpense) => axios.post(`${expenseurl}`, objexpense);
export const expenseupdate = (objexpense) => axios.put(`${expenseurl}`, objexpense);
