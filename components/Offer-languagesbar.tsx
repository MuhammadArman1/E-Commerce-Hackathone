import 'boxicons/css/boxicons.min.css';
import Link from 'next/link';

export default function Offer_languagesbar() {
  return (
    <div>
         <div className='text-white bg-[#272343] h-11 flex justify-center gap-[39rem] m- items-center '>
            <div className='tracking-wide'> &#10003; Free Shipping On All Orders 0ver $50</div>
            <div className='flex gap-12 items-center'>
              <div>Eng<i className='bx bx-chevron-down bx-sm'></i></div>
              <Link href="/Faq"><div>Faqs</div></Link>
              <div><i className='text-white bx bx-error-circle'></i> Need Help</div>
            </div>
        </div>
    </div>
  )
}
