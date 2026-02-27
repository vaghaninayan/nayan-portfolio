import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, TouchableOpacity, 
  Linking, SafeAreaView, Dimensions, Platform 
} from 'react-native';

const { width } = Dimensions.get('window');

// Color Palette from original CSS
const COLORS = {
  primary: '#2d6a4f',
  primaryLight: '#52b788',
  primaryPale: '#d8f3dc',
  accent: '#1b4332',
  bg: '#ffffff',
  bg2: '#f0faf4',
  text: '#1a1a2e',
  muted: '#555555',
  border: '#b7e4c7',
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER / NAVIGATION */}
      <View style={styles.navBar}>
        <Text style={styles.navLogo}>Nayan Vaghani</Text>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Text style={styles.hamburger}>☰</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.dropdownMenu}>
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map(item => (
            <TouchableOpacity key={item} style={styles.menuItem} onPress={() => setMenuOpen(false)}>
              <Text style={styles.menuItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* HERO SECTION */}
        <View style={styles.heroSection}>
          <View style={styles.heroPhotoWrap}>
            <Text style={styles.heroPhotoEmoji}>👨‍💻</Text>
          </View>
          
          <View style={styles.heroTextWrap}>
            <Text style={styles.heroGreeting}>Hello, I'm</Text>
            <Text style={styles.heroName}>Nayan Vaghani</Text>
            <Text style={styles.heroTitle}>App Developer & Web Developer</Text>
            
            <View style={styles.heroBtns}>
              <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
                <Text style={styles.btnPrimaryText}>Contact Info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.btnOutline]}>
                <Text style={styles.btnOutlineText}>Download Resume</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.heroSocials}>
              <TouchableOpacity 
                style={styles.socialIcon} 
                onPress={() => openLink('https://www.linkedin.com/in/nayan-vaghani-0a5a10210/')}
              >
                <Text style={styles.socialIconText}>in</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.socialIcon}
                onPress={() => openLink('mailto:nayanvaghani84@gmail.com')}
              >
                <Text style={styles.socialIconText}>✉</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.socialIcon}
                onPress={() => openLink('https://github.com/nayanvaghani')}
              >
                <Text style={styles.socialIconText}>💻</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ABOUT SECTION */}
        <View style={[styles.section, { backgroundColor: COLORS.bg2 }]}>
          <Text style={styles.sectionSub}>Get To Know More</Text>
          <Text style={styles.sectionTitle}>About Me</Text>
          
          <View style={styles.aboutCards}>
            <View style={styles.aboutCard}>
              <Text style={styles.aboutCardIcon}>💼</Text>
              <View>
                <Text style={styles.aboutCardTitle}>Experience</Text>
                <Text style={styles.aboutCardText}>2+ years · App & Web Developer</Text>
              </View>
            </View>
            <View style={styles.aboutCard}>
              <Text style={styles.aboutCardIcon}>🎓</Text>
              <View>
                <Text style={styles.aboutCardTitle}>Education</Text>
                <Text style={styles.aboutCardText}>Bachelor – B.C.A.{'\n'}Master – M.Sc.(CS) · ongoing</Text>
              </View>
            </View>
            <View style={styles.aboutCard}>
              <Text style={styles.aboutCardIcon}>📍</Text>
              <View>
                <Text style={styles.aboutCardTitle}>Location</Text>
                <Text style={styles.aboutCardText}>Berlin, Germany 🇩🇪</Text>
              </View>
            </View>
          </View>

          <Text style={styles.bodyText}>
            I'm <Text style={styles.bold}>Nayan Ghanshyambhai Vaghani</Text>, an <Text style={styles.bold}>App Developer & Web Developer</Text> based in Berlin, Germany. With 2 years of professional experience at Evenmore Infotech Pvt. Ltd., I have built web portals and mobile applications that solve real-world problems.
          </Text>
          <Text style={styles.bodyText}>
            I hold a <Text style={styles.bold}>Bachelor of Computer Applications</Text> from Veer Narmad South Gujarat University and I'm currently pursuing a <Text style={styles.bold}>Master's in Computer Science</Text> at IU International University of Applied Sciences, with a focus on Software Development and Artificial Intelligence.
          </Text>

          <View style={styles.tagsContainer}>
            {['Problem Solving', 'Teamwork', 'Adaptability', 'Time Management', 'Decision Making', 'Flexibility'].map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* SKILLS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionSub}>Explore My</Text>
          <Text style={styles.sectionTitle}>Skills</Text>
          
          <Text style={styles.skillGroupTitle}>💻 Web & App Development</Text>
          {['Web Development', 'Android & Mobile Apps', 'HTML / CSS', 'Database Management', 'Security Systems'].map(skill => (
            <View key={skill} style={styles.skillRow}>
              <View style={styles.skillCheck}><Text style={styles.skillCheckText}>✓</Text></View>
              <View>
                <Text style={styles.skillName}>{skill}</Text>
                <Text style={styles.skillLevel}>Experienced</Text>
              </View>
            </View>
          ))}

          <Text style={[styles.skillGroupTitle, { marginTop: 20 }]}>🧠 AI & Others</Text>
          {[
            { name: 'Natural Language Processing', level: 'Intermediate' },
            { name: 'Deep Learning', level: 'Intermediate' },
            { name: 'Artificial Intelligence', level: 'Intermediate' },
            { name: 'Software Development', level: 'Experienced' },
            { name: 'Git', level: 'Experienced' }
          ].map(skill => (
            <View key={skill.name} style={styles.skillRow}>
              <View style={styles.skillCheck}><Text style={styles.skillCheckText}>✓</Text></View>
              <View>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillLevel}>{skill.level}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* EXPERIENCE SECTION */}
        <View style={[styles.section, { backgroundColor: COLORS.bg2 }]}>
          <Text style={styles.sectionSub}>Explore My</Text>
          <Text style={styles.sectionTitle}>Experience</Text>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.expPeriod}>Apr 2023 – Mar 2024 · 1 yr</Text>
            <Text style={styles.expRole}>Web Developer</Text>
            <Text style={styles.expCompany}>Evenmore Infotech Pvt. Ltd. — Surat, Gujarat, India</Text>
            <Text style={styles.expDesc}>Worked as a full-time Web Developer contributing to web and mobile application projects. Focused on Android and mobile application development alongside core web solutions.</Text>
            <View style={styles.tagsContainer}>
              {['Web Development', 'Android', 'Mobile Apps', 'Full-time'].map(tag => (
                <View key={tag} style={styles.expTag}><Text style={styles.expTagText}>{tag}</Text></View>
              ))}
            </View>
          </View>
          
          <View style={[styles.timelineItem, { marginBottom: 0 }]}>
            <View style={styles.timelineDot} />
            <Text style={styles.expPeriod}>Apr 2022 – Apr 2023 · 1 yr 1 mo</Text>
            <Text style={styles.expRole}>Junior Web Developer</Text>
            <Text style={styles.expCompany}>Evenmore Infotech Pvt. Ltd. — Surat, Gujarat, India</Text>
            <Text style={styles.expDesc}>Started professional career building web-based applications and gaining hands-on experience in software development workflows and project delivery.</Text>
            <View style={styles.tagsContainer}>
              {['Web Development', 'Junior Level', 'Full-time'].map(tag => (
                <View key={tag} style={styles.expTag}><Text style={styles.expTagText}>{tag}</Text></View>
              ))}
            </View>
          </View>
        </View>

        {/* PROJECTS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionSub}>Browse My Recent</Text>
          <Text style={styles.sectionTitle}>Projects</Text>

          <View style={styles.projCard}>
            <View style={styles.projBadge}><Text style={styles.projBadgeText}>Web Portal</Text></View>
            <Text style={styles.projTitle}>Building Security Web Portal</Text>
            <Text style={styles.projDesc}>A comprehensive web-based digital controller for building security management. Handles entry/exit tracking, resident information, and automated notifications.</Text>
            <View style={styles.tagsContainer}>
              {['Security System', 'Resident Management', 'Web App'].map(tag => (
                <View key={tag} style={styles.expTag}><Text style={styles.expTagText}>{tag}</Text></View>
              ))}
            </View>
          </View>

          <View style={styles.projCard}>
            <View style={styles.projBadge}><Text style={styles.projBadgeText}>M.Sc. Research</Text></View>
            <Text style={styles.projTitle}>AI Code Agent</Text>
            <Text style={styles.projDesc}>Automated Code Generation & Self-Debugging agent. Accepts natural language, generates python code, runs in sandbox, and self-corrects using reinforcement feedback loops.</Text>
            <View style={styles.tagsContainer}>
              {['Python', 'LLM', 'AI Agent', 'Self-Debugging'].map(tag => (
                <View key={tag} style={styles.expTag}><Text style={styles.expTagText}>{tag}</Text></View>
              ))}
            </View>
          </View>
        </View>

        {/* EDUCATION SECTION */}
        <View style={[styles.section, { backgroundColor: COLORS.bg2 }]}>
          <Text style={styles.sectionSub}>My Academic</Text>
          <Text style={styles.sectionTitle}>Education</Text>

          <View style={styles.eduCard}>
            <Text style={styles.eduIcon}>🎓</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.eduDegree}>Master of Computer Science (M.Sc.)</Text>
              <Text style={styles.eduSchool}>IU International University</Text>
              <View style={styles.eduMetaRow}>
                <Text style={styles.eduYear}>Sep 2024 – Nov 2026</Text>
                <Text style={styles.eduStatusActive}>In Progress</Text>
              </View>
            </View>
          </View>

          <View style={styles.eduCard}>
            <Text style={styles.eduIcon}>💻</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.eduDegree}>Bachelor of Computer Applications (B.C.A.)</Text>
              <Text style={styles.eduSchool}>Veer Narmad South Gujarat University</Text>
              <View style={styles.eduMetaRow}>
                <Text style={styles.eduYear}>2018 – 2021</Text>
                <Text style={styles.eduStatusDone}>Completed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* CONTACT SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionSub}>Get In Touch</Text>
          <Text style={styles.sectionTitle}>Contact Me</Text>
          <Text style={[styles.bodyText, { textAlign: 'center', marginBottom: 30 }]}>
            I'm open to new opportunities, collaborations, and conversations. Feel free to reach out anytime!
          </Text>

          <TouchableOpacity style={styles.contactRow} onPress={() => openLink('mailto:nayanvaghani84@gmail.com')}>
            <View style={styles.crIcon}><Text>✉️</Text></View>
            <View>
              <Text style={styles.crLabel}>Email</Text>
              <Text style={styles.crValue}>nayanvaghani84@gmail.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactRow} onPress={() => openLink('https://www.linkedin.com/in/nayan-vaghani-0a5a10210/')}>
            <View style={styles.crIcon}><Text>💼</Text></View>
            <View>
              <Text style={styles.crLabel}>LinkedIn</Text>
              <Text style={styles.crValue}>nayan-vaghani-0a5a10210</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© Copyright Reserved by Nayan Vaghani</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    flexGrow: 1,
  },
  // Typography
  bold: { fontWeight: '700' },
  bodyText: {
    fontSize: 15,
    color: COLORS.muted,
    lineHeight: 24,
    marginBottom: 16,
  },
  // Navbar
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.bg,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    elevation: 2,
    zIndex: 10,
  },
  navLogo: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
  hamburger: {
    fontSize: 24,
    color: COLORS.primary,
  },
  dropdownMenu: {
    backgroundColor: COLORS.bg,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text,
  },
  // Hero
  heroSection: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: COLORS.bg,
  },
  heroPhotoWrap: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primaryPale,
    borderWidth: 5,
    borderColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 5,
  },
  heroPhotoEmoji: {
    fontSize: 80,
  },
  heroTextWrap: {
    alignItems: 'center',
  },
  heroGreeting: {
    fontSize: 16,
    color: COLORS.muted,
    marginBottom: 8,
  },
  heroName: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  heroBtns: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 24,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 2,
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  btnPrimaryText: {
    color: COLORS.bg,
    fontWeight: '600',
    fontSize: 14,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
  },
  btnOutlineText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  heroSocials: {
    flexDirection: 'row',
    gap: 15,
  },
  socialIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
  },
  // Sections
  section: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  sectionSub: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 30,
  },
  // About
  aboutCards: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 25,
  },
  aboutCard: {
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  aboutCardIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  aboutCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  aboutCardText: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 2,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 15,
  },
  tag: {
    backgroundColor: COLORS.primaryPale,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.primary,
  },
  // Skills
  skillGroupTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.accent,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryPale,
    paddingBottom: 8,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  skillCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primaryPale,
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  skillCheckText: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: '700',
  },
  skillName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  skillLevel: {
    fontSize: 12,
    color: COLORS.muted,
  },
  // Experience Timeline
  timelineItem: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.border,
    paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 30,
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: -9,
    top: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    borderWidth: 3,
    borderColor: COLORS.primaryPale,
  },
  expPeriod: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  expRole: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  expCompany: {
    fontSize: 14,
    color: COLORS.muted,
    marginBottom: 10,
  },
  expDesc: {
    fontSize: 14,
    color: COLORS.muted,
    lineHeight: 22,
  },
  expTag: {
    backgroundColor: COLORS.primaryPale,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  expTagText: {
    fontSize: 11,
    color: COLORS.primary,
  },
  // Projects
  projCard: {
    backgroundColor: COLORS.bg2,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  projBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 15,
  },
  projBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
  },
  projTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },
  projDesc: {
    fontSize: 14,
    color: COLORS.muted,
    lineHeight: 22,
  },
  // Education
  eduCard: {
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 15,
  },
  eduIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: COLORS.primaryPale,
    borderWidth: 1,
    borderColor: COLORS.border,
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 24,
    marginRight: 15,
    overflow: 'hidden',
  },
  eduDegree: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  eduSchool: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '500',
    marginBottom: 10,
  },
  eduMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  eduYear: {
    fontSize: 11,
    color: COLORS.muted,
    backgroundColor: COLORS.bg2,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  eduStatusActive: {
    fontSize: 11,
    fontWeight: '600',
    backgroundColor: '#d8f3dc',
    color: COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  eduStatusDone: {
    fontSize: 11,
    fontWeight: '600',
    backgroundColor: '#e9f5db',
    color: '#386641',
    borderWidth: 1,
    borderColor: '#b5d99c',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  // Contact
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: COLORS.bg2,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    marginBottom: 15,
  },
  crIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: COLORS.primaryPale,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  crLabel: {
    fontSize: 11,
    color: COLORS.muted,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  crValue: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  // Footer
  footer: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: COLORS.bg2,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footerText: {
    fontSize: 13,
    color: COLORS.muted,
  }
});
