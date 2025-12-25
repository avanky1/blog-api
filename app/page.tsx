"use client";

import { useEffect, useState } from "react";

type Article = {
  _id: string;
  title: string;
  content: string;
};

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);

  // fetch articles
  async function loadArticles() {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
  }

  // submit article
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle("");
    setContent("");
    loadArticles();
  }

  useEffect(() => {
    (async () => {
      await loadArticles();
    })();
  }, []);

  return (
    <main style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1>My Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">Add Article</button>
      </form>

      <hr />

      <h2>Articles</h2>

      {articles.map((a) => (
        <div key={a._id} style={{ marginBottom: "20px" }}>
          <h3>{a.title}</h3>
          <p>{a.content}</p>
        </div>
      ))}
    </main>
  );
}
