// RTE.jsx
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import conf from "@/conf/conf";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, defaultValue = "" }) {
  const editorRef = useRef(null);

  return (
    <div className="relative z-50">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={conf.tineymceapikey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={value}
            onEditorChange={(newValue) => onChange(newValue)}
            init={{
              height: 400,
              menubar: true,
              inline: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic underline | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              branding: false,
              setup: (editor) => {
                editor.on("init", () => {
                  editor.focus();
                });
              },
            }}
          />
        )}
      />
    </div>
  );
}
