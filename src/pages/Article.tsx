import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import { articles } from '../data/articles';

export function Article() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === parseInt(id || '0'));

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 blockchain-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>

          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-medium pulse-glow">
                {article.category}
              </span>
              {article.tags.map(tag => (
                <span key={tag} className="bg-[#1E1E1E] text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-reveal">
              {article.title}
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 text-sm mb-8 text-reveal stagger-1">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8 text-reveal stagger-2">
              <button className="flex items-center px-4 py-2 bg-[#1E1E1E] text-white rounded-lg hover:bg-[#333] transition-all duration-300 button-magnetic">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
              <button className="flex items-center px-4 py-2 bg-[#1E1E1E] text-white rounded-lg hover:bg-[#333] transition-all duration-300 button-magnetic">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl scale-on-hover">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-12">
            <div 
              className="prose prose-lg prose-invert max-w-none text-reveal"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                '--tw-prose-body': '#d1d5db',
                '--tw-prose-headings': '#ffffff',
                '--tw-prose-links': '#00BFFF',
                '--tw-prose-bold': '#ffffff',
                '--tw-prose-bullets': '#00BFFF',
                '--tw-prose-quotes': '#d1d5db',
                '--tw-prose-quote-borders': '#00BFFF',
                '--tw-prose-captions': '#9ca3af',
                '--tw-prose-code': '#FFD700',
                '--tw-prose-pre-code': '#d1d5db',
                '--tw-prose-pre-bg': '#1E1E1E',
                '--tw-prose-th-borders': '#374151',
                '--tw-prose-td-borders': '#374151',
              } as React.CSSProperties}
            />
          </div>

          {/* Author Bio */}
          <div className="glass-effect rounded-xl p-6 mb-12 slide-up">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">About {article.author}</h3>
                <p className="text-gray-300">
                  Expert contributor to Capital R3alm's insights and analysis on Web3 finance,
                  blockchain technology, and investment strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="slide-up stagger-1">
              <h2 className="text-3xl font-bold text-white mb-8">
                Related <span className="gradient-text">Articles</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.id}`}
                    className={`group slide-up stagger-${index + 1}`}
                  >
                    <div className="glass-effect rounded-xl overflow-hidden scale-on-hover">
                      <div className="relative h-48">
                        <img 
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-medium">
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-gray-400 text-sm mb-2">{relatedArticle.date}</div>
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{relatedArticle.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}