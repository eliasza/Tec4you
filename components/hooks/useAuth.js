import { useRouter } from "next/router";

export default function useAuth(){

  const router = useRouter()

  const login = (values, { setSubmitting }) => {
    fetch('/api/cognito/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      return res.json()
    }).then(data => {
      console.log(data)
    }).catch(async err => {
      const responseData = await err.json()
      if (responseData?.message?.includes("UserNotConfirmedException:")) {
        await fetch('/api/cognito/confirm/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: values.username })
        })
        await router.push({
            pathname: "/confirm",
            query: {username: values.username},
          },
          "/confirm")
      }
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const resetPasswordRequest = (values, { setSubmitting }) => {
    fetch('/api/cognito/password/reset_code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/password/reset',
        query: { username: values.username }
      },
        "/password/reset")
    }).catch(err => {
      console.error(err)
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const resetPassword = (values, { setSubmitting }) => {
    fetch('/api/cognito/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/login',
        query: { reset: true }
      },
        "/login")
    }).catch(err => {
      console.error(err)
    }).finally(() => {
      setSubmitting(false)
    })
  }

  return {
    login,
    resetPasswordRequest,
    resetPassword
  }
}