export default function FiltersPanel() {
  return (
    <div className="border rounded p-4 bg-white">
      <h4 className="font-semibold mb-2">فلاتر</h4>
      <div className="flex flex-col gap-2">
        <label className="text-sm">الفئة</label>
        <select className="border rounded px-2 py-1">
          <option>كل الفئات</option>
          <option>برمجة</option>
          <option>تصميم</option>
        </select>

        <label className="text-sm mt-2">السعر</label>
        <select className="border rounded px-2 py-1">
          <option>كل الأسعار</option>
          <option>مجانية</option>
          <option>مدفوعة</option>
        </select>
      </div>
    </div>
  );
}
