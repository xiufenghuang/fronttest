import service from '@/utils/request'

export const useDeviceApi = (id: number) => {
	return service.get('/device/' + id)
}

export const useDeviceSubmitApi = (dataForm: any) => {
	if (dataForm.id) {
		return service.put('/device', dataForm)
	} else {
		return service.post('/device', dataForm)
	}
}

export const bindBatch = (data: any) => {
	return service.post('/device/bindBatch', data)
}