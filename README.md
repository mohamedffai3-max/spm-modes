# SPM MODS - Front-end starter

ملفات واجهة أمامية ثابتة لموقع SPM MODS:
- `index.html` الصفحة الرئيسية وصفحة تفاصيل المود.
- `style.css` التصميم الأسود والأحمر.
- `script.js` اختيار Java/Bedrock، البحث، التصنيفات، عرض تفاصيل المودات والمودات المشابهة.

## التشغيل
افتح `index.html` في المتصفح، أو ارفع الملفات الثلاثة إلى مستودع GitHub وفَعّل GitHub Pages من Settings > Pages.

## إضافة مود حقيقي
افتح `script.js` وأضف عنصرًا داخل مصفوفة `mods` بنفس شكل العناصر الموجودة. غيّر:
- `name`: اسم المود
- `category`: Movement / Weapons / World / Mobs / Furniture / Tools
- `edition`: Java أو Bedrock
- `version`, `size`, `downloads`
- `description`: وصف المود
- `download`: رابط ملف التحميل المباشر
- `video`: رابط Embed للفيديو (مثلاً رابط YouTube بصيغة embed)

ملاحظة: المودات الحالية بيانات تجريبية، وأزرار التحميل لن تعمل فعليًا حتى تضع روابط الملفات الحقيقية. التريلر يحتاج إضافة رابط فيديو لاحقًا. لا توجد لوحة تحكم أو رفع ملفات في هذه النسخة.
