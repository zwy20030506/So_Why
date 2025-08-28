import React, { useState } from 'react';
import { generateProductDocument } from '../utils/generatorApi';
import { addSolution } from '../utils/tempSolutions';
import { useNavigate } from 'react-router-dom';

const Generate = () => {
  const [productName, setProductName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!productName.trim()) {
      setError('请填写产品名称');
      return;
    }
    setLoading(true);
    try {
      const markdown = await generateProductDocument({ productName: productName.trim(), content });
      const id = encodeURIComponent(productName.trim());
      addSolution({ id, title: productName.trim(), markdown });
      navigate(`/generated/${id}`);
    } catch (err) {
      setError(err?.message || '生成失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h2 style={{ marginBottom: 16 }}>自动生成产品页面</h2>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="productName">产品名称</label>
          <input
            id="productName"
            type="text"
            className="form-input"
            placeholder="例如：AI听说课堂"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="content">可选：基础信息/要点</label>
          <textarea
            id="content"
            rows={8}
            className="form-textarea"
            placeholder="不填也可以，系统会自动补充生成"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {error ? <div className="form-error" style={{ marginBottom: 12 }}>{error}</div> : null}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? '生成中...' : '生成页面'}
        </button>
      </form>
    </div>
  );
};

export default Generate;


