/// <reference types="multer" />
import { CloudinaryService } from './cloudinary/cloudinary.service';
export declare class AppService {
    private cloudinary;
    constructor(cloudinary: CloudinaryService);
    uploadImageToCloudinary(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
