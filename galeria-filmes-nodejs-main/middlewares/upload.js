import multer from "multer";
const upload = multer({
    storage: multer.diskStorage({
        destination: "public/uploads/",
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + "-" + file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
            cb(null, true);
        } else {
            cb(new Error("Apenas imagens PNG, JPEG e são permitidas!"));
        }
    }
});

export default upload;