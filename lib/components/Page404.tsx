"use client"
import './Page404.css'
export default function Page404() {
    function navigateUrl(url:string){
        window.location.href = url
      }
  return (
    <>
    
<div className="bg-gradient-to-r from-purple-300 to-blue-200 h-screen">
<div className="w-9/12 m-auto py-16  flex items-center justify-center">
<div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
<div className="border-t border-gray-200 text-center pt-8">
<h1 className="text-9xl font-bold text-purple-400">404</h1>
<h1 className="text-6xl font-medium py-8">Chưa đăng nhập</h1>
<p className="text-2xl pb-8 px-12 font-medium">Oops! Trang bạn tìm không tồn tại.Hoặc do bạn chưa đăng nhập tại TheheAi.</p>
<button onClick={()=>{navigateUrl('https://dashboard.theheai.xyz/profile')}}
 className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-10 py-3 rounded-md mr-6" >
Đăng nhập
</button>
<button onClick={()=>{navigateUrl('https://dashboard.theheai.xyz/profile')}}
className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
Báo lỗi
</button>
</div>
</div>
</div>
</div>
 
    </>
  );
}