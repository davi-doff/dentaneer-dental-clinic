import React, { useState } from 'react';

const GuideContent: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-pastel-green-800 border-b-2 border-pastel-green-200 pb-2 mb-4">{title}</h2>
    {children}
  </div>
);

export const GuidesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deploy' | 'maintain'>('deploy');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pastel-green-800 mb-8">คู่มือการใช้งานและการดูแลรักษาเว็บ</h1>
      
      <div className="mb-6 flex justify-center border-b border-gray-200">
        <button
          onClick={() => setActiveTab('deploy')}
          className={`px-6 py-2 text-lg font-semibold ${activeTab === 'deploy' ? 'text-pastel-green-700 border-b-2 border-pastel-green-700' : 'text-gray-500'}`}
        >
          การนำเว็บขึ้นใช้งานจริง (Deployment)
        </button>
        <button
          onClick={() => setActiveTab('maintain')}
          className={`px-6 py-2 text-lg font-semibold ${activeTab === 'maintain' ? 'text-pastel-green-700 border-b-2 border-pastel-green-700' : 'text-gray-500'}`}
        >
          การบำรุงรักษาและอัพเดทข้อมูล
        </button>
      </div>

      {activeTab === 'deploy' ? (
        <GuideContent title="ขั้นตอนการนำเว็บขึ้นใช้งานจริง">
          <p>เว็บแอปพลิเคชันนี้เป็นแบบ Frontend (ส่วนหน้าบ้าน) เท่านั้น ซึ่งหมายความว่าข้อมูล (เช่น รายชื่อหมอ, นัดหมาย) จะถูกเก็บไว้ในโค้ดชั่วคราวและจะหายไปเมื่อรีเฟรชหน้าเว็บ เพื่อให้ใช้งานได้จริง เราต้องเชื่อมต่อกับ Backend (ส่วนหลังบ้าน) และ Database (ฐานข้อมูล)</p>
          
          <h3 className="font-bold mt-6">ขั้นตอนสรุป:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>เตรียม Backend และ Database:</strong> เลือกใช้บริการ Backend-as-a-Service (BaaS) เช่น Firebase หรือ Supabase ซึ่งง่ายสำหรับผู้เริ่มต้น</li>
            <li><strong>เช่า Domain Name:</strong> จดชื่อเว็บ (เช่น www.pasteldental.com) กับผู้ให้บริการอย่าง GoDaddy, Namecheap</li>
            <li><strong>Hosting Frontend:</strong> นำโค้ด Frontend ไปวางบนบริการโฮสติ้ง เช่น Vercel หรือ Netlify</li>
            <li><strong>เชื่อมต่อทั้งหมดเข้าด้วยกัน:</strong> ตั้งค่า Domain ให้ชี้ไปที่ Hosting และแก้ไขโค้ด Frontend ให้เรียกข้อมูลจาก Backend</li>
          </ol>

          <h4 className="font-bold mt-4">ขั้นตอนที่ 1: ตั้งค่า Backend และ Database (ตัวอย่างด้วย Firebase)</h4>
          <ol className="list-decimal list-inside space-y-2">
              <li>ไปที่เว็บไซต์ <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a> และสร้างโปรเจกต์ใหม่</li>
              <li>เปิดใช้งาน Firestore Database เพื่อใช้เป็นฐานข้อมูลสำหรับเก็บข้อมูลทันตแพทย์, บริการ, นัดหมาย ฯลฯ</li>
              <li>สร้าง Collections ต่างๆ ใน Firestore ให้ตรงกับข้อมูลในไฟล์ `data.ts` (เช่น 'dentists', 'services') แล้วนำข้อมูลเข้าไปใส่</li>
              <li>ในหน้า Project Settings ของ Firebase, คัดลอกค่า `firebaseConfig` มาเก็บไว้</li>
          </ol>

          <h4 className="font-bold mt-4">ขั้นตอนที่ 2: แก้ไขโค้ดเพื่อเชื่อมต่อ Firebase</h4>
          <p>คุณจะต้องแก้ไขโค้ดเพื่อดึงข้อมูลจาก Firebase แทน `data.ts` และบันทึกการนัดหมายลง Firebase แทนการใช้ State ในแอป</p>

          <h4 className="font-bold mt-4">ขั้นตอนที่ 3: การนำโค้ดไปวาง (Hosting)</h4>
          <p>บริการอย่าง Vercel หรือ Netlify ทำให้การโฮสต์เว็บง่ายมาก:</p>
          <ol className="list-decimal list-inside space-y-2">
              <li>สมัครสมาชิก Vercel หรือ Netlify</li>
              <li>เชื่อมต่อกับบัญชี GitHub ที่คุณเก็บโค้ดโปรเจกต์นี้ไว้</li>
              <li>เลือกโปรเจกต์และกด Deploy ระบบจะทำการ build และนำเว็บขึ้นให้โดยอัตโนมัติ คุณจะได้ URL ชั่วคราวมา (เช่น `pasteldental.vercel.app`)</li>
          </ol>
          
          <h4 className="font-bold mt-4">ขั้นตอนที่ 4: การตั้งค่า Domain</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>ไปที่หน้าตั้งค่าของโปรเจกต์บน Vercel/Netlify และเพิ่ม Custom Domain ที่คุณซื้อไว้</li>
            <li>ทำตามคำแนะนำเพื่อตั้งค่า DNS ในระบบของผู้ให้บริการโดเมนของคุณ ให้ชี้มาที่ Vercel/Netlify</li>
            <li>รอสักครู่ (อาจใช้เวลาถึง 24 ชม.)เพื่อให้ DNS อัพเดท ตอนนี้เว็บของคุณก็จะใช้งานได้ผ่านชื่อโดเมนจริง</li>
          </ol>
        </GuideContent>
      ) : (
        <GuideContent title="คู่มือการบำรุงรักษาและอัพเดทข้อมูล">
          <p>การอัพเดทข้อมูลบนเว็บแบ่งเป็น 2 กรณี: แบบที่ยังไม่ได้ต่อ Backend (แก้ไขโค้ดโดยตรง) และแบบที่ต่อ Backend แล้ว (จัดการผ่านระบบหลังบ้าน)</p>

          <h3 className="font-bold mt-6">กรณีที่ 1: แก้ไขข้อมูลในโค้ดโดยตรง (สำหรับเวอร์ชันปัจจุบัน)</h3>
          <p>ข้อมูลทั้งหมดของเว็บไซต์นี้ถูกเก็บไว้ในไฟล์ `data.ts` หากคุณต้องการเปลี่ยนแปลงข้อมูล ให้ทำตามขั้นตอนต่อไปนี้:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>เพิ่ม/แก้ไขทันตแพทย์:</strong> เปิดไฟล์ `data.ts` และแก้ไขข้อมูลใน array ที่ชื่อว่า `DENTISTS`</li>
            <li><strong>เพิ่ม/แก้ไขบริการ:</strong> แก้ไขข้อมูลใน array ที่ชื่อว่า `SERVICES`</li>
            <li><strong>เพิ่ม/แก้ไขรีวิว, บทความ, คำถามที่พบบ่อย:</strong> แก้ไข array `REVIEWS`, `BLOG_POSTS`, และ `FAQ_ITEMS` ตามลำดับ</li>
          </ul>
          <p className="mt-2"><strong>ข้อควรจำ:</strong> หลังแก้ไขไฟล์ `data.ts` คุณจะต้องทำการ Deploy เว็บไซต์ใหม่อีกครั้งเพื่อให้การเปลี่ยนแปลงแสดงผลบนเว็บจริง</p>

          <h3 className="font-bold mt-6">กรณีที่ 2: อัพเดทข้อมูลผ่านระบบหลังบ้าน (เมื่อเชื่อมต่อ Firebase/Backend แล้ว)</h3>
          <p>นี่คือวิธีที่แนะนำสำหรับการใช้งานจริง เพราะพนักงานสามารถอัพเดทข้อมูลได้เองโดยไม่ต้องยุ่งกับโค้ด:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>เข้าสู่ระบบหลังบ้าน:</strong> พนักงานจะเข้าสู่ระบบของ Backend ที่เลือกใช้ (เช่น Firebase Console)</li>
            <li><strong>จัดการข้อมูล:</strong>
              <ul className="list-disc list-inside ml-4">
                <li><strong>จัดการข้อมูลทันตแพทย์/บริการ:</strong> ไปที่ Firestore Database และแก้ไขข้อมูลใน collection ที่เกี่ยวข้องได้โดยตรง</li>
                <li><strong>จัดการนัดหมาย:</strong> หน้า Admin ของเว็บ (ที่ path `/admin`) จะแสดงข้อมูลนัดหมายจากฐานข้อมูลโดยตรง พนักงานสามารถกดยกเลิกนัดได้จากหน้านี้</li>
              </ul>
            </li>
            <li><strong>ข้อมูลอัพเดททันที:</strong> เมื่อข้อมูลใน Database ถูกเปลี่ยนแปลง เว็บไซต์ที่ดึงข้อมูลจาก Database ก็จะแสดงผลข้อมูลใหม่โดยอัตโนมัติ ไม่จำเป็นต้อง Deploy ใหม่ทุกครั้ง</li>
          </ol>
        </GuideContent>
      )}
    </div>
  );
};
