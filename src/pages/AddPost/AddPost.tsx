import React, { useCallback, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddPost: React.FC = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputFileRef = useRef(null);

  const onChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const handleDeletePreview = () => {
    setImageUrl("");
  };

  return (
    <div className="container">
      <div className="mt-7">
        <div className="flex gap-6 items-center">
          <button
            //   @ts-ignore
            onClick={() => inputFileRef.current.click()}
            className="mb-5 bg-cyan-500 text-white p-2 rounded-lg hover:opacity-80 transition-all"
          >
            Добавить превью
          </button>
          {imageUrl !== "" && (
            <button
              onClick={handleDeletePreview}
              className="p-2 bg-red-600 rounded-lg text-white self-start hover:opacity-80 transition-all"
            >
              Удалить превью
            </button>
          )}
        </div>
        <input
          onChange={() =>
            setImageUrl(
              "https://yt3.googleusercontent.com/cl2osKMbMRYIoVaShz_TZENcZ6LBXJ4HqdNp5FsUTfCxXFSvTSMmFdSTQhPhDR_3kgBGfmXMwQ=s900-c-k-c0x00ffffff-no-rj"
            )
          }
          ref={inputFileRef}
          type="file"
          hidden
        />

        <div>
          {imageUrl !== "" && (
            <img
              className="mb-1 max-w-lg relative "
              src={imageUrl}
              alt="preview"
            />
          )}
          <div className="grid md:max-w-60">
            <input
              className="w-full md:w-96  text-4xl border mb-3 p-2  font-bold"
              type="text"
              placeholder="Заголовок"
            />
            <input
              className="w-full md:w-96  text-2xl border mb-3 p-2  font-bold"
              type="text"
              placeholder="Теги (через запятую)"
            />
          </div>
          <ReactQuill
            style={{ height: 500 }}
            theme="snow"
            value={text}
            onChange={onChange}
          />
        </div>
        <button className=" mt-14 bg-cyan-500 text-white relative z-10 p-2 rounded-lg hover:opacity-80 transition-all">
          Создать пост
        </button>
      </div>
    </div>
  );
};

export default AddPost;
