import { UploadFile } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FC, useState } from "react";

export const ImageUpload: FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-image"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-image">
        <IconButton color="primary" component="span" sx={{ marginBottom: 2 }}>
          <UploadFile />
        </IconButton>
      </label>

      {image && (
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <img
            src={image}
            alt="Uploaded"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
            }}
          />
        </Box>
      )}
    </Box>
  );
};
