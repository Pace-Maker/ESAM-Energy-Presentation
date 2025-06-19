"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle,
  Clock,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timelineData = [
    {
      week: "Week 1 & 2",
      date: "4-July-2025",
      tasks: [
        {
          title: "Week 1 & 2 :",
          items: [
            "1. Implement energy issues Overcooling, Lack of Modulation. Prepare the data for Park Island by calculating it from backend & show it in the UI for the last 30 days. This should include :",
            "     - Showing the count of equipment having energy issues",
            "     - Clicking on the issue should show the actual list of equipment with a suggestion of why the issue happened.",
            "     - Clicking on the equipment should show the supporting data trends for the issue",
            "2. Implement Energy Consumption Distribution, Equipment Run Hours Distribution widgets including the filters (Hieararchy filter & asset type)",
          ],
        },
      ],
    },
    {
      week: "Week 3",
      date: "11-July-2025",
      tasks: [
        {
          title: "Week 3 :",
          items: [
            "1. Implement energy issues Low ΔT Penalty, Out of Schedule Operation. Prepare the data for Park Island by calculating it from backend & show it in the UI for the last 30 days. This should include :",
            "     - Showing the count of equipment having energy issues",
            "     - Clicking on the issue should show the actual list of equipment with a suggestion of why the issue happened.",
            "     - Clicking on the equipment should show the supporting data trends for the issue",
            "2. Implement Energy Consumption Ranking, Energy Consumption by Asset Type including the filters (Hieararchy filter & asset type)",
          ],
        },
      ],
    },
    {
      week: "Week 4",
      date: "18-July-2025",
      tasks: [
        {
          title: "Week 4 :",
          items: [
            "1. Implement energy issues Short Cycling, VFD Speed Monitoring, Lack of Modulation. Prepare the data for Park Island by calculating it from backend & show it in the UI for the last 30 days. This should include :",
            "     - Showing the count of equipment having energy issues",
            "     - Clicking on the issue should show the actual list of equipment with a suggestion of why the issue happened.",
            "     - Clicking on the equipment should show the supporting data trends for the issue",
            "2. Implement Single Line Diagram. It should include :",
            "     - Energy consumption & comparison info",
            "     - Map available energy issue count in SLD",
          ],
        },
      ],
    },
    {
      week: "Week 5",
      date: "25-July-2025",
      tasks: [
        {
          title: "Week 5 :",
          items: [
            "1. Implement energy issues Low Economiser Utilisation, Low HRW Utilisation, Cooling Coil leaking. Prepare the data for Park Island by calculating it from backend & show it in the UI for the last 30 days. This should include :",
            "     - Showing the count of equipment having energy issues",
            "     - Clicking on the issue should show the actual list of equipment with a suggestion of why the issue happened.",
            "     - Clicking on the equipment should show the supporting data trends for the issue",
            "2. Refine Single Line Diagram. It should include :",
            "     - Add above mentioned available energy issue count in SLD",
            "     - Include blind spot functionality",
          ],
        },
      ],
    },
    {
      week: "Week 6",
      date: "01-Aug-2025",
      tasks: [
        {
          title: "Week 6 :",
          items: [
            "1. All the energy issues should be available from the system for all date periods. Instead of preparing the data manually from the backend it should be updated on a daily basis through our aggregation",
            "    - Make sure the hierarchy & asset type filter is also applicable",
            "2. Start working on System Management Consolidation to identify : Actions Taken, Work Orders - Consolidation Count and List, User Action Required",
          ],
        },
      ],
    },
    {
      week: "Week 7",
      date: "08-Aug-2025",
      tasks: [
        {
          title: "Week 7 :",
          items: [
            "1. Energy Issues Distribution widget - across community, sub community, site, asset type",
            "2. Complete System Management Consolidation to identify : Actions Taken, Work Orders - Consolidation Count and List, User Action Required",
          ],
        },
      ],
    },
    {
      week: "Week 8",
      date: "15-Aug-2025",
      tasks: [
        {
          title: "Week 8 :",
          items: ["1. Energy Issues Analysis - Nectar Intelligence"],
        },
      ],
    },
    {
      week: "Week 9",
      date: "22-Aug-2025",
      tasks: [
        {
          title: "Week 9 :",
          items: ["Complete Feature Handover"],
        },
      ],
    },
  ];

  const slides = [
    // Title Slide
    {
      type: "title",
      content: {
        title: "Energy Management Solution",
        subtitle: "Implementation Timeline",
        period: "Expected Start Date: 23-Jun-2025",
        endDate: "Expected End Date: 22-Aug-2025",
      },
    },
    // Timeline Overview Only
    {
      type: "timeline-overview",
      content: {
        title: "Project Timeline Overview",
        timeline: timelineData,
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const exportToPDF = async () => {
    // Function to convert image to base64
    const imageToBase64 = async (url: string): Promise<string> => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error converting image:", error);
        return "";
      }
    };

    // Get base64 versions of logos
    const nectarLogoBase64 = await imageToBase64("/nectar-logo.png");
    const esamLogoBase64 = await imageToBase64("/esam-logo.png");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Energy Management Solution - Timeline</title>
          <meta charset="UTF-8">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .page {
              width: 210mm;
              min-height: 297mm;
              padding: 20mm;
              margin: 0 auto;
              background: white;
              page-break-after: always;
            }
            
            .page:last-child {
              page-break-after: avoid;
            }
            
            .title-page {
              background: linear-gradient(135deg, #475569, #1e293b, #0f172a);
              color: white;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              position: relative;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .logo-container {
              position: absolute;
              top: 20mm;
              left: 20mm;
              right: 20mm;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .logo {
              background: rgba(255, 255, 255, 0.95);
              padding: 12px 18px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .logo img {
              height: 45px;
              width: auto;
              max-width: 180px;
            }
            
            .title-content {
              margin-top: 60mm;
              max-width: 170mm;
            }
            
            .main-title {
              font-size: 52px;
              font-weight: bold;
              margin-bottom: 25px;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
              line-height: 1.1;
            }
            
            .subtitle {
              font-size: 32px;
              font-weight: 300;
              margin-bottom: 45px;
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            }
            
            .date-badges {
              display: flex;
              flex-direction: column;
              gap: 18px;
              align-items: center;
              margin-bottom: 35px;
            }
            
            .date-badge {
              background: rgba(255, 255, 255, 0.95);
              color: #1e293b;
              padding: 15px 30px;
              border-radius: 30px;
              font-size: 18px;
              font-weight: 600;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
              white-space: nowrap;
              display: flex;
              align-items: center;
              gap: 10px;
            }
            
            .project-info {
              text-align: center;
            }
            
            .project-duration {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 10px;
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            }
            
            .project-description {
              font-size: 18px;
              font-weight: 400;
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            }
            
            .timeline-page {
              background: linear-gradient(135deg, #fef3e2, #dbeafe);
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .timeline-title {
              text-align: center;
              color: #1e40af;
              font-size: 40px;
              font-weight: bold;
              margin-bottom: 35px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 15px;
            }
            
            .timeline-container {
              position: relative;
            }
            
            .timeline-line {
              position: absolute;
              left: 130px;
              top: 0;
              bottom: 0;
              width: 3px;
              background: linear-gradient(to bottom, #3b82f6, #f97316);
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .timeline-item {
              display: flex;
              margin-bottom: 30px;
              page-break-inside: avoid;
              break-inside: avoid;
              align-items: flex-start;
            }
            
            .timeline-date {
              width: 120px;
              text-align: right;
              padding-right: 18px;
              flex-shrink: 0;
              padding-top: 8px;
            }
            
            .date-badge-timeline {
              background: white;
              color: #1e40af;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 600;
              border: 2px solid #3b82f6;
              display: inline-block;
              white-space: nowrap;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .timeline-dot {
              position: absolute;
              left: 125px;
              width: 14px;
              height: 14px;
              background: linear-gradient(45deg, #3b82f6, #f97316);
              border-radius: 50%;
              border: 4px solid white;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
              z-index: 10;
              margin-top: 12px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .timeline-content {
              flex: 1;
              margin-left: 30px;
            }
            
            .timeline-card {
              background: white;
              border-radius: 10px;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
              border: 1px solid #e5e7eb;
              overflow: hidden;
            }
            
            .timeline-card-header {
              background: linear-gradient(135deg, #3b82f6, #f97316);
              color: white;
              padding: 18px 25px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .timeline-card-title {
              font-size: 20px;
              font-weight: bold;
              margin: 0;
            }
            
            .timeline-card-body {
              padding: 25px;
            }
            
            .task-title {
              font-size: 18px;
              font-weight: 600;
              color: #1e40af;
              margin-bottom: 18px;
            }
            
            .task-list {
              list-style: none;
            }
            
            .task-item {
              display: flex;
              align-items: flex-start;
              margin-bottom: 12px;
              font-size: 14px;
              line-height: 1.6;
              color: #374151;
            }
            
            .task-bullet {
              width: 8px;
              height: 8px;
              background: #f97316;
              border-radius: 50%;
              margin-right: 12px;
              margin-top: 8px;
              flex-shrink: 0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            .task-text {
              white-space: pre-line;
              flex: 1;
            }
            
            @media print {
              * {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              
              .page {
                margin: 0;
                box-shadow: none;
                page-break-after: always;
              }
              
              .timeline-item {
                page-break-inside: avoid;
                break-inside: avoid;
              }
              
              .timeline-card {
                page-break-inside: avoid;
                break-inside: avoid;
              }
              
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          <!-- Title Page -->
          <div class="page title-page">
            <div class="logo-container">
              <div class="logo">
                <img src="${nectarLogoBase64}" alt="Nectar Logo" />
              </div>
              <div class="logo">
                <img src="${esamLogoBase64}" alt="ESAM Logo" />
              </div>
            </div>
            <div class="title-content">
              <h1 class="main-title">Energy Management Solution</h1>
              <h2 class="subtitle">Implementation Timeline</h2>
              <div class="date-badges">
                <div class="date-badge">📅 Expected Start Date: 23-Jun-2025</div>
                <div class="date-badge">📅 Expected End Date: 22-Aug-2025</div>
              </div>
              <div class="project-info">
                <p class="project-duration">9 Week Development Cycle</p>
                <p class="project-description">Comprehensive Energy Management Implementation</p>
              </div>
            </div>
          </div>
          
          <!-- Timeline Page -->
          <div class="page timeline-page">
            <h1 class="timeline-title">
              🕒 Project Timeline Overview
            </h1>
            <div class="timeline-container">
              <div class="timeline-line"></div>
              ${timelineData
                .map(
                  (week, index) => `
                <div class="timeline-item">
                  <div class="timeline-date">
                    <span class="date-badge-timeline">${week.date}</span>
                  </div>
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-card">
                      <div class="timeline-card-header">
                        <h3 class="timeline-card-title">${week.week}</h3>
                      </div>
                      <div class="timeline-card-body">
                        <h4 class="task-title">${week.tasks[0].title}</h4>
                        <ul class="task-list">
                          ${week.tasks[0].items
                            .map(
                              (item) => `
                            <li class="task-item">
                              <div class="task-bullet"></div>
                              <span class="task-text">${item}</span>
                            </li>
                          `
                            )
                            .join("")}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </body>
      </html>
    `;

    // Open print dialog with the content
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
        }, 1000); // Increased delay to ensure images load
      };
    }
  };

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Removed background image, kept dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black" />

            {/* Logo positioning - Only on first page */}
            <div className="absolute top-8 left-8 z-20 leading-3">
              <Image
                src="/nectar-logo.png"
                alt="Nectar Logo"
                width={150}
                className="bg-white/95 p-3 rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-8 right-8 z-20">
              <Image
                src="/esam-logo.png"
                alt="ESAM Logo"
                width={180}
                className="bg-white/95 p-3 rounded-lg shadow-lg"
              />
            </div>

            <div className="relative z-10 text-white max-w-5xl mx-auto px-8 mt-16">
              <h1 className="text-7xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
                {slide.content.title}
              </h1>
              <h2 className="text-4xl font-light mb-12 text-white drop-shadow-md">
                {slide.content.subtitle}
              </h2>
              <div className="flex flex-col items-center justify-center gap-6 text-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                  <Badge
                    variant="secondary"
                    className="px-8 py-4 text-xl bg-white/90 text-slate-800 border-white/50 backdrop-blur-sm font-semibold shadow-lg whitespace-nowrap"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    {slide.content.period}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-8 py-4 text-xl bg-white/90 text-slate-800 border-white/50 backdrop-blur-sm font-semibold shadow-lg whitespace-nowrap"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    {slide.content.endDate}
                  </Badge>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-2xl font-semibold text-white drop-shadow-md">
                    9 Week Development Cycle
                  </p>
                  <p className="text-lg text-white drop-shadow-sm mt-2 font-medium">
                    Comprehensive Energy Management Implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "timeline-overview":
        return (
          <div className="h-full p-6 bg-gradient-to-br from-orange-50 to-blue-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {/* No logos on second page */}
              <div className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-blue-800 flex items-center justify-center">
                  <Clock className="w-12 h-12 mr-4 text-orange-500" />
                  {slide.content.title}
                </h1>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-40 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-orange-400"></div>

                <div className="space-y-8">
                  {slide.content.timeline.map((week: any, index: number) => (
                    <div key={index} className="relative flex items-start">
                      {/* Date on the left - single line */}
                      <div className="w-36 flex-shrink-0 text-right pr-4">
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-base border-blue-300 text-blue-700 bg-white shadow-sm whitespace-nowrap"
                        >
                          {week.date}
                        </Badge>
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute left-40 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2.5"></div>

                      {/* Content Card */}
                      <div className="ml-12 flex-1">
                        <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader className="bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                            <CardTitle className="text-2xl font-bold">
                              {week.week}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="text-blue-800">
                              <h3 className="font-semibold text-lg mb-3">
                                {week.tasks[0].title}
                              </h3>
                              <div className="space-y-2">
                                {week.tasks[0].items.map(
                                  (item: string, itemIndex: number) => (
                                    <div
                                      key={itemIndex}
                                      className="flex items-start"
                                    >
                                      <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                                      <span className="text-sm leading-relaxed whitespace-pre-line">
                                        {item}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative">{renderSlide(slides[currentSlide])}</div>

      {/* Navigation - Hidden in print/PDF */}
      <div className="bg-gradient-to-r from-blue-800 to-orange-600 text-white p-4 flex items-center justify-between print:hidden">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="text-white hover:bg-white/20"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
            />
          ))}
        </div>

        <div className="text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
}
