import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h4 className="font-bold">Khusousi</h4>
            <p className="text-sm text-gray-600">منصة تعليمية عربية — نموذج تصميمي</p>
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Khusousi. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}
