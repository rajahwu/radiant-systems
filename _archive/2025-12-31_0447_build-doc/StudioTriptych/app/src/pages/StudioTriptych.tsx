import 'react';

const StudioTriptych = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero Section with Triptych Background */}
      <div style={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(/api/placeholder/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))'
        }}></div>

        {/* Content overlay */}
        <div style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '60px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '700',
            margin: '0 0 16px 0',
            letterSpacing: '-1px'
          }}>
            THE UNIFIED CREATIVE SYSTEM
          </h1>
          <p style={{
            fontSize: '24px',
            margin: 0,
            color: '#b0b0b0',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Dropframe | Grindline | VSM School
          </p>
        </div>
      </div>

      {/* Studio Cards Section */}
      <div style={{
        padding: '80px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Dropframe Studio */}
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '40px',
          transition: 'transform 0.3s, border-color 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.borderColor = '#4a9eff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#2a2a2a';
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 12px 0',
            color: '#4a9eff'
          }}>
            DROPFRAME STUDIO
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#888',
            margin: '0 0 24px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Research & Analysis Hub
          </p>
          <p style={{
            color: '#c0c0c0',
            lineHeight: '1.6',
            fontSize: '15px'
          }}>
            Strategic research environment for deep analysis, pattern recognition, and 
            intelligence gathering. Transforms raw data into actionable insights through 
            systematic investigation frameworks.
          </p>
        </div>

        {/* Grindline Studio */}
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '40px',
          transition: 'transform 0.3s, border-color 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.borderColor = '#a855f7';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#2a2a2a';
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 12px 0',
            color: '#a855f7'
          }}>
            GRINDLINE STUDIO
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#888',
            margin: '0 0 24px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Content Production & Refinement
          </p>
          <p style={{
            color: '#c0c0c0',
            lineHeight: '1.6',
            fontSize: '15px'
          }}>
            High-velocity production environment where content moves through iterative 
            refinement cycles. Human-AI collaboration optimized for quality output at scale.
          </p>
        </div>

        {/* VSM School */}
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '40px',
          transition: 'transform 0.3s, border-color 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.borderColor = '#f59e0b';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#2a2a2a';
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 12px 0',
            color: '#f59e0b'
          }}>
            VSM SCHOOL
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#888',
            margin: '0 0 24px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Focused Learning & Development
          </p>
          <p style={{
            color: '#c0c0c0',
            lineHeight: '1.6',
            fontSize: '15px'
          }}>
            Structured learning pathways through fabrication, development, strategy, 
            application, and mastery. Visual systems thinking methodology for 
            building operational expertise.
          </p>
        </div>
      </div>

      {/* System Architecture Section */}
      <div style={{
        padding: '80px 60px',
        backgroundColor: '#0d0d0d',
        borderTop: '1px solid #2a2a2a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            System Architecture
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              padding: '32px',
              backgroundColor: '#1a1a1a',
              borderLeft: '4px solid #4a9eff',
              borderRadius: '8px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#4a9eff',
                marginBottom: '16px'
              }}>
                Signal Flow
              </h3>
              <p style={{
                color: '#c0c0c0',
                lineHeight: '1.6',
                fontSize: '15px'
              }}>
                Information moves from research (Dropframe) → production (Grindline) → 
                learning artifacts (VSM School), with feedback loops at each transition point.
              </p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: '#1a1a1a',
              borderLeft: '4px solid #a855f7',
              borderRadius: '8px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#a855f7',
                marginBottom: '16px'
              }}>
                Integration Protocol
              </h3>
              <p style={{
                color: '#c0c0c0',
                lineHeight: '1.6',
                fontSize: '15px'
              }}>
                Shared interfaces, common data structures, and federation logic enable 
                seamless handoffs without context loss or duplicate effort.
              </p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: '#1a1a1a',
              borderLeft: '4px solid #f59e0b',
              borderRadius: '8px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#f59e0b',
                marginBottom: '16px'
              }}>
                Unified State
              </h3>
              <p style={{
                color: '#c0c0c0',
                lineHeight: '1.6',
                fontSize: '15px'
              }}>
                All three studios operate on synchronized state, enabling any studio 
                to initiate workflows that span the complete creative system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioTriptych;