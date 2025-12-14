export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master DevOps from Zero to Hero
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Learn industry-leading DevOps practices, tools, and methodologies. 
            Build, deploy, and scale applications like a pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-white to-blue-50 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-50 hover:to-white transition-all shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 transition-all">
              Watch Preview
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Why Choose Our DevOps Course?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training designed by industry experts to help you master 
              modern DevOps practices and advance your career.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hands-On Projects</h3>
              <p className="text-gray-600">
                Work on real-world projects that mirror industry scenarios and build a portfolio that stands out.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from seasoned DevOps engineers with years of experience at top tech companies.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Lifetime Access</h3>
              <p className="text-gray-600">
                Get lifetime access to course materials, updates, and our exclusive community forum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-xl text-gray-600">
              Master the essential skills needed to excel in DevOps
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">✓ CI/CD Pipelines</h3>
              <p className="text-gray-700">
                Build and automate continuous integration and deployment pipelines using Jenkins, GitLab CI, and GitHub Actions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-purple-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">✓ Containerization</h3>
              <p className="text-gray-700">
                Master Docker and Kubernetes to containerize applications and orchestrate them at scale.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-cyan-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">✓ Infrastructure as Code</h3>
              <p className="text-gray-700">
                Learn Terraform and Ansible to automate infrastructure provisioning and configuration management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-orange-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">✓ Cloud Platforms</h3>
              <p className="text-gray-700">
                Deploy and manage applications on AWS, Azure, and GCP with best practices for scalability and security.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-green-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">✓ Monitoring & Logging</h3>
              <p className="text-gray-700">
                Implement comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-violet-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">✓ Security & Compliance</h3>
              <p className="text-gray-700">
                Integrate security into your DevOps workflow with DevSecOps practices and compliance automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Course Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              A structured learning path from fundamentals to advanced topics
            </p>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Module 1: DevOps Fundamentals</h3>
              <p className="text-gray-600 mb-2">
                Introduction to DevOps culture, principles, and practices. Understanding the software development lifecycle.
              </p>
              <span className="text-sm text-gray-500">6 hours • 12 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Module 2: Version Control & Git</h3>
              <p className="text-gray-600 mb-2">
                Master Git workflows, branching strategies, and collaborative development practices.
              </p>
              <span className="text-sm text-gray-500">4 hours • 8 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-cyan-50 to-teal-50 border-cyan-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Module 3: Linux & Shell Scripting</h3>
              <p className="text-gray-600 mb-2">
                Essential Linux commands, shell scripting, and system administration basics.
              </p>
              <span className="text-sm text-gray-500">8 hours • 15 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Module 4: Docker & Containers</h3>
              <p className="text-gray-600 mb-2">
                Containerization concepts, Docker images, containers, Dockerfile, and Docker Compose.
              </p>
              <span className="text-sm text-gray-500">10 hours • 20 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Module 5: Kubernetes Orchestration</h3>
              <p className="text-gray-600 mb-2">
                Kubernetes architecture, pods, services, deployments, and managing containerized applications at scale.
              </p>
              <span className="text-sm text-gray-500">12 hours • 25 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-orange-50 to-red-50 border-orange-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Module 6: CI/CD Pipelines</h3>
              <p className="text-gray-600 mb-2">
                Building automated pipelines with Jenkins, GitLab CI, GitHub Actions, and best practices.
              </p>
              <span className="text-sm text-gray-500">10 hours • 18 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Module 7: Infrastructure as Code</h3>
              <p className="text-gray-600 mb-2">
                Terraform for infrastructure provisioning and Ansible for configuration management.
              </p>
              <span className="text-sm text-gray-500">14 hours • 28 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-violet-50 to-fuchsia-50 border-violet-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Module 8: Cloud Platforms</h3>
              <p className="text-gray-600 mb-2">
                Deploying applications on AWS, Azure, and GCP. Understanding cloud services and architectures.
              </p>
              <span className="text-sm text-gray-500">16 hours • 32 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Module 9: Monitoring & Observability</h3>
              <p className="text-gray-600 mb-2">
                Setting up monitoring with Prometheus, Grafana, and implementing logging solutions.
              </p>
              <span className="text-sm text-gray-500">8 hours • 15 lessons</span>
            </div>
            <div className="border-l-4 bg-gradient-to-r from-pink-50 to-rose-50 border-pink-600 pl-6 py-4 rounded-r-lg hover:shadow-md transition-all">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Module 10: DevSecOps & Best Practices</h3>
              <p className="text-gray-600 mb-2">
                Security integration, compliance automation, and industry best practices for production environments.
              </p>
              <span className="text-sm text-gray-500">6 hours • 12 lessons</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              What Our Students Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-semibold">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alex Smith</h4>
                  <p className="text-sm text-gray-500">Senior DevOps Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;This course transformed my career. The hands-on projects and real-world scenarios 
                gave me the confidence to tackle complex DevOps challenges at work.&quot;
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-semibold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Johnson</h4>
                  <p className="text-sm text-gray-500">Cloud Architect</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;The best investment I&apos;ve made in my professional development. The instructors are 
                knowledgeable and the curriculum is comprehensive. Highly recommended!&quot;
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-cyan-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-semibold">DC</span>
                </div>
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;From zero DevOps knowledge to deploying production systems. The step-by-step approach 
                and practical exercises made all the difference.&quot;
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our DevOps course
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What prerequisites do I need for this course?
              </h3>
              <p className="text-gray-700">
                While no prior DevOps experience is required, having basic knowledge of Linux commands and 
                software development concepts will be helpful. We start from the fundamentals and gradually 
                progress to advanced topics, making it suitable for beginners and intermediate learners.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg shadow-md border border-purple-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                How long does it take to complete the course?
              </h3>
              <p className="text-gray-700">
                The course includes approximately 94 hours of content across 10 comprehensive modules. 
                Most students complete it in 8-12 weeks when studying part-time (10-15 hours per week). 
                You have lifetime access, so you can learn at your own pace.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-100 p-6 rounded-lg shadow-md border border-cyan-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Will I get a certificate upon completion?
              </h3>
              <p className="text-gray-700">
                Yes! Upon successful completion of all modules and projects, you&apos;ll receive a 
                certificate of completion that you can add to your LinkedIn profile and resume. 
                The certificate demonstrates your proficiency in DevOps practices and tools.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-lg shadow-md border border-orange-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                What tools and technologies will I learn?
              </h3>
              <p className="text-gray-700">
                You&apos;ll master essential DevOps tools including Docker, Kubernetes, Jenkins, GitLab CI, 
                GitHub Actions, Terraform, Ansible, AWS, Azure, GCP, Prometheus, Grafana, and the ELK stack. 
                We also cover best practices for security, monitoring, and infrastructure automation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Is there support available if I get stuck?
              </h3>
              <p className="text-gray-700">
                Absolutely! You&apos;ll have access to our exclusive community forum where you can ask questions, 
                share experiences, and get help from instructors and fellow students. Our instructors also 
                provide regular office hours for live Q&A sessions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-100 p-6 rounded-lg shadow-md border border-violet-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Can I get a refund if I&apos;m not satisfied?
              </h3>
              <p className="text-gray-700">
                Yes, we offer a 30-day money-back guarantee. If you&apos;re not satisfied with the course 
                for any reason within the first 30 days, we&apos;ll provide a full refund, no questions asked.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-lg shadow-md border border-indigo-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Are the course materials updated regularly?
              </h3>
              <p className="text-gray-700">
                Yes! DevOps tools and practices evolve rapidly, so we regularly update our course content 
                to reflect the latest industry standards and tool versions. As a student, you&apos;ll have 
                lifetime access to all updates at no additional cost.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-lg shadow-md border border-pink-200">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Will this course help me get a job in DevOps?
              </h3>
              <p className="text-gray-700">
                Our course is designed to provide you with practical, job-ready skills. You&apos;ll work on 
                real-world projects that you can showcase in your portfolio. Many of our students have successfully 
                transitioned to DevOps roles or advanced their careers. We also provide career guidance and 
                resume tips to help you in your job search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your DevOps Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who have transformed their careers with our comprehensive DevOps course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-white to-blue-50 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-50 hover:to-white transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Enroll Now - $299
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 transition-all">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-6 text-blue-100">
            ✓ 30-day money-back guarantee • ✓ Lifetime access • ✓ Certificate of completion
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">WeLearn WeShare</h3>
              <p className="text-gray-400">
                Empowering professionals with cutting-edge DevOps skills and knowledge.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Course</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Curriculum</a></li>
                <li><a href="#" className="hover:text-white">Instructors</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WeLearn WeShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

