import { SignIn } from '@clerk/nextjs'


function SignInPage() {
  return (
   <main className='flex h-screen  items-center justify-center'>
     <SignIn/>
   </main>
  )
}

export default SignInPage