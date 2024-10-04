import { Box, TextField, Typography } from "@mui/material";
import type { FC } from "react";
import { useState } from "react";
import { ImageUpload } from "./ImageUpload";
import { ProofTable } from "./ProofTable";

export const PaperPage: FC = () => {
  const [paperTitle, setPaperTitle] = useState<string>("New Paper");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaperTitle(event.target.value);
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <Box
      sx={{
        maxWidth: "90vw",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
      }}
    >
      {isEditing ? (
        <TextField
          value={paperTitle}
          onChange={handleTitleChange}
          onBlur={toggleEditing}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleEditing();
            }
          }}
          variant="standard"
          autoFocus
          sx={{ marginBottom: 2, textAlign: "center" }}
          inputProps={{
            style: {
              textAlign: "center",
              fontSize: "2rem",
            },
          }}
        />
      ) : (
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          onClick={toggleEditing}
          sx={{ cursor: "pointer" }}
        >
          {paperTitle}
        </Typography>
      )}

      <ImageUpload />

      <ProofTable />
    </Box>
  );
};
