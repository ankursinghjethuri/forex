<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrendYai | AI-Powered Forex Predictions</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #2962ff;
            --primary-dark: #0039cb;
            --secondary: #00c853;
            --dark: #121826;
            --light: #f5f9ff;
            --gray: #8f9bb3;
            --card-bg: #1a2238;
            --border: #25304c;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, var(--dark) 0%, #0d111c 100%);
            color: var(--light);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Header */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 28px;
            font-weight: 700;
            color: var(--light);
        }
        
        .logo i {
            color: var(--primary);
        }
        
        nav ul {
            display: flex;
            gap: 30px;
            list-style: none;
        }
        
        nav a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: var(--primary);
        }
        
        .auth-buttons {
            display: flex;
            gap: 15px;
        }
        
        .btn {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
        }
        
        .btn-outline {
            border: 2px solid var(--primary);
            color: var(--primary);
            background: transparent;
        }
        
        .btn-primary {
            background: var(--primary);
            color: white;
            border: none;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(41, 98, 255, 0.3);
        }
        
        /* Hero Section */
        .hero {
            display: flex;
            align-items: center;
            gap: 50px;
            padding: 80px 0;
        }
        
        .hero-content {
            flex: 1;
        }
        
        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 18px;
            color: var(--gray);
            margin-bottom: 30px;
            line-height: 1.6;
        }
        
        .hero-image {
            flex: 1;
            position: relative;
        }
        
        .hero-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        /* Features */
        .features {
            padding: 80px 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-title h2 {
            font-size: 36px;
            margin-bottom: 15px;
        }
        
        .section-title p {
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .feature-card {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 30px;
            border: 1px solid var(--border);
            transition: transform 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            background: rgba(41, 98, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: var(--primary);
            font-size: 24px;
        }
        
        .feature-card h3 {
            font-size: 20px;
            margin-bottom: 15px;
        }
        
        .feature-card p {
            color: var(--gray);
            line-height: 1.6;
        }
        
        /* CTA */
        .cta {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border-radius: 20px;
            padding: 60px;
            text-align: center;
            margin: 80px 0;
        }
        
        .cta h2 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .cta p {
            max-width: 600px;
            margin: 0 auto 30px;
            color: rgba(255, 255, 255, 0.8);
        }
        
        /* Footer */
        footer {
            padding: 60px 0 30px;
            border-top: 1px solid var(--border);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-column h3 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        
        .footer-column ul {
            list-style: none;
        }
        
        .footer-column li {
            margin-bottom: 12px;
        }
        
        .footer-column a {
            color: var(--gray);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-column a:hover {
            color: var(--primary);
        }
        
        .social-links {
            display: flex;
            gap: 15px;
        }
        
        .social-links a {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--card-bg);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--light);
            transition: all 0.3s;
        }
        
        .social-links a:hover {
            background: var(--primary);
            transform: translateY(-3px);
        }
        
        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid var(--border);
            color: var(--gray);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            header {
                flex-direction: column;
                gap: 20px;
            }
            
            nav ul {
                gap: 15px;
            }
            
            .hero {
                flex-direction: column;
                text-align: center;
                padding: 40px 0;
            }
            
            .hero h1 {
                font-size: 36px;
            }
            
            .cta {
                padding: 40px 20px;
            }
            
            .cta h2 {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <i class="fas fa-chart-line"></i>
                <span>TrendYai</span>
            </div>
            
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            
            <div class="auth-buttons">
                <a href="#" class="btn btn-outline">Login</a>
                <a href="#" class="btn btn-primary">Sign Up</a>
            </div>
        </header>
        
        <section class="hero">
            <div class="hero-content">
                <h1>AI-Powered Forex Predictions with 90% Accuracy</h1>
                <p>TrendYai uses advanced machine learning to analyze market trends and provide accurate forex predictions. Join thousands of traders who trust our platform for daily insights.</p>
                <div class="auth-buttons">
                    <a href="#" class="btn btn-primary">Start Free Trial</a>
                    <a href="#" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Forex trading dashboard">
            </div>
        </section>
        
        <section class="features">
            <div class="section-title">
                <h2>Why Choose TrendYai</h2>
                <p>Our platform combines cutting-edge technology with financial expertise to give you an edge in the forex market.</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>AI-Powered Analysis</h3>
                    <p>Our proprietary algorithms analyze thousands of data points to identify profitable trading opportunities.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Real-Time Signals</h3>
                    <p>Get instant notifications when our system detects high-probability trading setups.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h3>Comprehensive Analytics</h3>
                    <p>Detailed performance metrics and risk analysis for every prediction.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3>Mobile Friendly</h3>
                    <p>Access our platform from anywhere with our responsive web and mobile apps.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Risk Management</h3>
                    <p>Built-in tools to help you manage your risk and protect your capital.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Community Support</h3>
                    <p>Join our community of traders to share strategies and insights.</p>
                </div>
            </div>
        </section>
        
        <section class="cta">
            <h2>Ready to Transform Your Trading?</h2>
            <p>Join TrendYai today and get access to our AI-powered forex predictions with a 14-day free trial.</p>
            <a href="#" class="btn btn-primary" style="background: white; color: var(--primary);">Start Free Trial</a>
        </section>
        
        <footer>
            <div class="footer-content">
                <div class="footer-column">
                    <h3>TrendYai</h3>
                    <p>AI-powered forex predictions with unmatched accuracy.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Integrations</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 TrendYai. All rights reserved.</p>
            </div>
        </footer>
    </div>
</body>
</html>
