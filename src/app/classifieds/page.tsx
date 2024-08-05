import VarianOne from "@/components/MyClassifieds/ClassifiedsVariants.tsx/VariantOne";
import VariantTwo from "@/components/MyClassifieds/ClassifiedsVariants.tsx/VariantTwo";
import MyClassifieds from "@/components/MyClassifieds/MyClassifieds";

const ClassifiedsPage = () => {
  return (
    <>
      <div className="flex flex-col pt-20">
        <MyClassifieds/>
        <VarianOne/>
        <VariantTwo/>
      </div>
    </>
  );
};

export default ClassifiedsPage;
