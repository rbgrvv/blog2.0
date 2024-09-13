import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>👋</h1> <br />
   
     <div className="grid grid-cols-2 gap-4 mt-10">
     <img src="rufatt.png" alt="" className="rounded-l-xl shadow-xl" />
     <p className="">
    
     Руфат, 21 год. Инженер-программист из Баку. В этом блоге я делюсь своими мыслями и размышлениями о программировании и жизни в целом.
   </p>
     </div>
    </div>
  );
}
