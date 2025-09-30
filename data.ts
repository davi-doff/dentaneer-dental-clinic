


import type { Dentist, Service, Review, BlogPost, FaqItem } from './types.ts';
import React from 'react';

// FIX: Convert SVG icon components from JSX to React.createElement calls to fix TypeScript errors in a .ts file.
// A simple Tooth Icon component for demonstration
const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M12 2C9.25 2 7 4.25 7 7C7 8.85 8.1 10.45 9.65 11.25C8.82 12.35 8.25 13.63 8.25 15C8.25 17.07 9.93 18.75 12 18.75C14.07 18.75 15.75 17.07 15.75 15C15.75 13.63 15.18 12.35 14.35 11.25C15.9 10.45 17 8.85 17 7C17 4.25 14.75 2 12 2ZM11 20V22H13V20H11Z" })
  )
);
const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement('path', { d: "M9.93 2.55a2 2 0 0 0-1.86 0L3.54 5.2a2 2 0 0 0-1.09 1.7L2.03 12a2 2 0 0 0 1.09 1.7l4.53 2.65a2 2 0 0 0 1.86 0l4.53-2.65a2 2 0 0 0 1.09-1.7l.42-5.1a2 2 0 0 0-1.09-1.7Z" }),
    React.createElement('path', { d: "M14.5 10.5 12 8l-2.5 2.5L7 8l2.5 2.5L7 13l2.5-2.5L12 13l2.5-2.5L17 13l-2.5-2.5Z" })
  )
);
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" })
    )
);


export const DENTISTS: Dentist[] = [
  { id: 1, name: 'ทพญ. สุขใจ ดีพร้อม', specialty: 'ทันตกรรมทั่วไป', branch: 'สาขาสยาม', imageUrl: 'https://picsum.photos/400/400?random=1' },
  { id: 2, name: 'ทพ. สมชาย เก่งกาจ', specialty: 'ทันตกรรมจัดฟัน', branch: 'สาขาสีลม', imageUrl: 'https://picsum.photos/400/400?random=2' },
  { id: 3, name: 'ทพญ. อารี ยิ้มสวย', specialty: 'ทันตกรรมสำหรับเด็ก', branch: 'สาขาสยาม', imageUrl: 'https://picsum.photos/400/400?random=3' },
  { id: 4, name: 'ทพ. วิชัย ชำนาญ', specialty: 'รากฟันเทียม', branch: 'สาขาอโศก', imageUrl: 'https://picsum.photos/400/400?random=4' },
];

export const SERVICES: Service[] = [
  { id: 1, name: 'ตรวจสุขภาพฟันและขูดหินปูน', description: 'บริการตรวจเช็คสุขภาพช่องปากและฟัน พร้อมทำความสะอาดเพื่อลดคราบหินปูน', icon: ToothIcon },
  { id: 2, name: 'อุดฟัน', description: 'การรักษาฟันผุโดยการใช้วัสดุอุดฟันเพื่อทดแทนเนื้อฟันที่เสียไป', icon: SparkleIcon },
  { id: 3, name: 'จัดฟัน', description: 'แก้ไขปัญหาการเรียงตัวของฟันและสบฟันผิดปกติ ด้วยเครื่องมือจัดฟันหลากหลายประเภท', icon: ToothIcon },
  { id: 4, name: 'ฟอกสีฟัน', description: 'เปลี่ยนสีฟันให้ขาวสว่างขึ้นอย่างปลอดภัยภายใต้การดูแลของทันตแพทย์', icon: SparkleIcon },
  { id: 5, name: 'รากฟันเทียม', description: 'ทดแทนฟันที่สูญเสียไปอย่างถาวร ให้ความรู้สึกและการใช้งานใกล้เคียงฟันธรรมชาติ', icon: ShieldIcon },
  { id: 6, name: 'ทันตกรรมสำหรับเด็ก', description: 'ดูแลสุขภาพช่องปากและฟันของเด็กตั้งแต่ฟันน้ำนมซี่แรก', icon: ToothIcon },
];

export const REVIEWS: Review[] = [
  { id: 1, author: 'คุณสมศรี', text: 'คุณหมอมือเบามากค่ะ บรรยากาศคลินิกดี สะอาดสะอ้าน พนักงานน่ารักค่ะ', rating: 5 },
  { id: 2, author: 'คุณวิรัช', text: 'มาจัดฟันที่นี่ ประทับใจมากครับ เดินทางสะดวก คลินิกสวยงาม ให้คำปรึกษาดีมากๆ', rating: 5 },
  { id: 3, author: 'คุณมานี', text: 'พาลูกมาทำฟัน น้องไม่กลัวเลย คุณหมอชวนคุยเก่งมากค่ะ', rating: 4 },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'แปรงฟันอย่างไรให้ถูกวิธี?', summary: 'การแปรงฟันเป็นพื้นฐานของการดูแลสุขภาพช่องปาก แต่คุณแปรงฟันได้ถูกวิธีแล้วหรือยัง? มาดูเคล็ดลับกัน', imageUrl: 'https://picsum.photos/600/400?random=5', publishedDate: '15 ก.ค. 2567' },
  { id: 2, title: 'เลือกยาสีฟันแบบไหนดี?', summary: 'ยาสีฟันในท้องตลาดมีมากมายหลายชนิด แต่ละชนิดเหมาะกับใครบ้าง เรามีคำตอบ', imageUrl: 'https://picsum.photos/600/400?random=6', publishedDate: '10 ก.ค. 2567' },
  { id: 3, title: 'ทำไมต้องขูดหินปูนทุก 6 เดือน', summary: 'การขูดหินปูนไม่ใช่แค่เรื่องความสวยงาม แต่สำคัญต่อสุขภาพเหงือกและฟันในระยะยาว', imageUrl: 'https://picsum.photos/600/400?random=7', publishedDate: '1 ก.ค. 2567' },
];

export const FAQ_ITEMS: FaqItem[] = [
    { id: 1, question: 'ควรพาลูกไปพบทันตแพทย์ครั้งแรกเมื่อไหร่?', answer: 'ควรพาเด็กไปพบทันตแพทย์ครั้งแรกเมื่อฟันน้ำนมซี่แรกขึ้น หรือไม่เกินอายุ 1 ปี เพื่อรับคำแนะนำในการดูแลสุขภาพช่องปากและสร้างความคุ้นเคย' },
    { id: 2, question: 'จัดฟันเจ็บไหม?', answer: 'ในช่วงแรกของการติดเครื่องมือหรือปรับเครื่องมือ อาจมีความรู้สึกตึงหรือเจ็บเล็กน้อย แต่อาการจะค่อยๆ ดีขึ้นภายใน 2-3 วัน' },
    { id: 3, question: 'ขูดหินปูนเจ็บหรือไม่?', answer: 'โดยทั่วไปการขูดหินปูนจะไม่เจ็บ แต่อาจมีอาการเสียวฟันบ้างในบางคน หากมีหินปูนสะสมมากหรือมีอาการเหงือกอักเสบร่วมด้วย' },
    { id: 4, question: 'ฟอกสีฟันอยู่ได้นานแค่ไหน?', answer: 'ความขาวของสีฟันหลังการฟอกจะอยู่ได้นานประมาณ 1-3 ปี ขึ้นอยู่กับการดูแลรักษาสุขภาพช่องปากและพฤติกรรมการบริโภคอาหารและเครื่องดื่ม' },
];