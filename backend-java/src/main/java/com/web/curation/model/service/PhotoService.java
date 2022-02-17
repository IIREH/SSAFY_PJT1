package com.web.curation.model.service;

import com.web.curation.model.entity.Photo;
import com.web.curation.model.service.repository.PhotoRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Service
public class PhotoService {
    @Autowired
    private PhotoRepository photoRepository;

    static String defaultPhotoId = "620edbdbaf5ebd5e7f603563";

    public Photo addPhoto(MultipartFile file) throws IOException {
        Photo photo = Photo.builder()
                .image(new Binary(BsonBinarySubType.BINARY, file.getBytes()))
                .build();

        return photoRepository.save(photo);
    }

    public Photo getPhoto(String id) {
        String photoId = id == null || id.equals("") ? defaultPhotoId : id;
//        Photo photo = photoRepository.findById(photoId).get();

//        return  Base64.getEncoder().encodeToString(photo.getImage().getData());
        return photoRepository.findById(photoId).get();
    }

    public void removePhoto(Photo photo) {
        if(photo.getId().equals(defaultPhotoId) == false) {
            photoRepository.delete(photo);
        }
    }

    public void removePhotoById(String photoId) {
        if(photoId != defaultPhotoId) {
            photoRepository.deleteById(photoId);
        }
    }
}
