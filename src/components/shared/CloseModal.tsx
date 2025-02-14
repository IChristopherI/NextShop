'use client'
 import { useRouter } from 'next/navigation';
 
 export function CloseModal() {
  const router = useRouter()
 
  return (
    <>
              <button onClick={() => {router.back()}}>X</button>
    
    </>
  )
}