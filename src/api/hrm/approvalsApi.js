import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/approvals', 'get', data)
export const information = data => createAPI(`/approvals/${data.id}`, 'get', data)
export const reviewHistory = data => createAPI(`/approvals/flows/${data.id}`, 'get', data)
export const getSetState = data => createAPI(`/approvals/setting`, 'get', data)
export const saveSetState = data => createAPI(`/approvals/setting`, 'put', data)
export const submitApprovals = data => createAPI('/approvals/:id', 'put', data)
export const importApprovals = data => createAPI('/approvals/import', 'post', data)
export const exportApprovals = data => createAPI(`/approvals/export/${data.month}`, 'get', data)
export const process = data => createAPI('/approvals/process', 'post', data)
export const applyOvertime = data => createAPI('/user/apply/overtime', 'put', data)
export const applyDimission = data => createAPI('/user/apply/dimission', 'put', data)
export const applyeLave = data => createAPI('/user/apply/leave', 'put', data)
export const approvalsList = data => createAPI(`/user/process/instance/${data.page}/${data.pageSize}`, 'PUT', data)
export const approvalsDetail = data => createAPI(`/user/approvals/${data.id}/detail`, 'get', data)
export const approvalsDel = data => createAPI(`/user/approvals/${data.id}`, 'delete', data)
export const approvalsPass = data => createAPI(`/user/approvals/${data.id}/pass`, 'put', data)
export const approvalsReject = data => createAPI(`/user/approvals/${data.id}/reject`, 'put', data)
