import { useRouter } from 'next/router'

export default function useRegister() {

	const router = useRouter()

	const register = (values, { setSubmitting }) => {
		fetch('/api/cognito/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		}).then(res => {
			if (!res.ok) throw res
			router.push({
				pathname: '/confirm',
				query: { username: values?.username }
			},
				"/confirm")
		}).catch(err => {
			console.error(err)
		}).finally(() => {
			setSubmitting(false)
		})
	}

	const confirm = (values, { setSubmitting }) => {
		fetch('/api/cognito/confirm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		}).then(res => {
			if (!res.ok) throw res
			router.push({
				pathname: '/login',
				query: { confirmed: true }
			},
				"/login")
		}).catch(err => {
			console.error(err)
		}).finally(() => {
			setSubmitting(false)
		})
	}

	

	return {
		register,
		confirm
	}
}