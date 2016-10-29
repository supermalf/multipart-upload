package easyupload;

import easyupload.entity.FileUpload;
//import easyupload.repository.FileUploadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileUploadService {

//    @Autowired
//    FileUploadRepository fileUploadRepository;

    // Retrieve file
    public FileUpload findByFilename(String filename) {
//        return fileUploadRepository.findByFilename(filename);
        return new FileUpload();
    }

    // Upload the file
    public void uploadFile(FileUpload doc) {
//        fileUploadRepository.saveAndFlush(doc);
    }
}
