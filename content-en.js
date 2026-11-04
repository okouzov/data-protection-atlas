window.ATLAS_CONTENT = {
  "scenarios": [
    {
      "id": "printer",
      "group": "office",
      "tag": "AT THE OFFICE",
      "icon": "▤",
      "title": "Just a quick coffee.",
      "short": "A contract on the printer. An unlocked laptop. Five minutes away.",
      "story": "You print an employment contract, leave a copy on the shared printer and head out for coffee. Your laptop stays unlocked, with another copy on your desk.",
      "options": [
        "I lock my screen and put every copy away before leaving.",
        "I leave them there — my colleagues are people I trust."
      ],
      "correct": 0,
      "explanation": "Access to information depends on a work-related need to know. Collect printouts immediately, store them securely and shred unwanted confidential copies. Do not discuss contract details in shared spaces."
    },
    {
      "id": "visitor",
      "group": "office",
      "tag": "PHYSICAL ACCESS",
      "icon": "⇥",
      "title": "One politely opened door.",
      "short": "A stranger follows you onto a staff floor, smiling confidently.",
      "story": "A visitor with no visible badge follows you through an access-controlled door. They say they are here for a meeting and seem friendly.",
      "options": [
        "I let them in so I do not appear rude.",
        "I ask who they are meeting and direct them to reception."
      ],
      "correct": 1,
      "explanation": "This is a tailgating risk: entering behind an authorised person. A polite check protects everyone. Visitors should sign in and be escorted to their host; attending an event does not give unrestricted access to staff floors."
    },
    {
      "id": "phishing",
      "group": "digital",
      "tag": "PHISHING",
      "icon": "✉",
      "title": "‘Verify within 24 hours!’",
      "short": "An urgent audit. A shutdown threat. A link for administrator login.",
      "story": "An email appears to come from a familiar provider: ‘Mandatory administrator account audit. Verify within 24 hours or your service will be suspended.’ The sender’s domain looks unusual.",
      "options": [
        "I do not open the link; I verify through a known channel and report it to IT.",
        "I sign in through the link to avoid losing the service."
      ],
      "correct": 0,
      "explanation": "Artificial urgency, threats and a mismatched domain are warning signs. Do not send passwords or codes. Check through the known website or contact, not the details supplied in the suspicious email."
    },
    {
      "id": "recipient",
      "group": "digital",
      "tag": "WRONG RECIPIENT",
      "icon": "↗",
      "title": "Right name. Wrong address.",
      "short": "Autocomplete selects an external contact for the attendee list.",
      "story": "On Friday, you rush to send a list of names, phone numbers and dietary requirements. Autocomplete selects an external address instead of your colleague. You notice after sending.",
      "options": [
        "I wait until Monday — perhaps the file will not be opened.",
        "I report to IT and the DPO immediately and ask the unintended recipient to delete it."
      ],
      "correct": 1,
      "explanation": "Asking for deletion does not replace reporting. Dietary requirements may reveal health or religious information. To prevent a repeat, check the full address and use work links with restricted permissions instead of unrestricted attachments."
    },
    {
      "id": "partner",
      "group": "sharing",
      "tag": "EXTERNAL PARTNER",
      "icon": "⇄",
      "title": "‘They are an important partner.’",
      "short": "A municipality requests conference contacts for a different initiative.",
      "story": "A partner municipality asks for conference attendees’ names, emails and job titles to invite them to its own consultation. A manager forwards the request with a Thursday deadline.",
      "options": [
        "I send the data — management supports the request.",
        "I hold the transfer and review the purpose and permissibility with the DPO."
      ],
      "correct": 1,
      "explanation": "Trust in a partner and an internal instruction do not resolve the new-purpose question. The legal basis, transparency, roles, minimum necessary data and sharing terms must be reviewed."
    },
    {
      "id": "api",
      "group": "sharing",
      "tag": "RESEARCH DATA",
      "icon": "⌘",
      "title": "‘Just one API key.’",
      "short": "A hackathon participant asks for direct access to sensor data.",
      "story": "A student writes from a personal email address requesting database or API access to urban sensor and air-quality data. They explain they are building a useful hackathon project.",
      "options": [
        "I verify through the organisers and clarify approval, scope and terms.",
        "I send the shared API key — the data contains no names."
      ],
      "correct": 0,
      "explanation": "Even non-personal data may be subject to licences, contracts and institutional rights. Verify the request’s origin and the terms of use, including purpose, restrictions and responsibility. Do not share common or unrestricted keys."
    },
    {
      "id": "dsar",
      "group": "rights",
      "tag": "RIGHT OF ACCESS",
      "icon": "§",
      "title": "‘What data do you hold about me?’",
      "short": "An applicant asks for their CV, registrations and interview notes.",
      "story": "A person who attended events and applied for a job requests a copy of all their personal data, including assessments and interview notes.",
      "options": [
        "I forward the request to the DPO immediately for coordinated handling.",
        "I refuse because internal notes are never provided."
      ],
      "correct": 0,
      "explanation": "Do not ignore the request or send an unchecked archive. The DPO coordinates identity checks, scope, other people’s privacy and a response within the applicable timeframe. Being internal does not, by itself, exclude information."
    },
    {
      "id": "personal-email",
      "group": "sharing",
      "tag": "WORK CHANNELS",
      "icon": "▣",
      "title": "I will finish it at home.",
      "short": "A convenient transfer of work files to personal email.",
      "story": "To finish a project from home, you consider emailing a budget and work files to your personal account. This would save you signing in to the work environment.",
      "options": [
        "Personal email is fine if I promise to delete the files later.",
        "I use the approved work environment and available secure remote access."
      ],
      "correct": 1,
      "explanation": "Personal email and unapproved cloud services move data outside the managed environment. Use work systems such as approved SharePoint and VPN access, where applicable. If you have already sent files, notify the responsible teams."
    },
    {
      "id": "laptop",
      "group": "digital",
      "tag": "LOST DEVICE",
      "icon": "▱",
      "title": "The laptop is gone.",
      "short": "It is Saturday. The device was stolen. A password is not enough.",
      "story": "On Saturday, you discover that your work laptop has been stolen. It contains local work files. A password protects the device, but you do not know whether its drive is encrypted.",
      "options": [
        "I report to IT and the DPO immediately and file a police report.",
        "I wait for a working day — the password should protect the files."
      ],
      "correct": 0,
      "explanation": "A login password is not a substitute for full-disk encryption. Provide the device identifier, time, place and known data on it. IT assesses access restrictions and remote actions; the DPO assesses the risk. If stolen, also provide the police report reference."
    },
    {
      "id": "mfa",
      "group": "digital",
      "tag": "MFA ATTACK",
      "icon": "◉",
      "title": "The phone will not stop asking.",
      "short": "Login prompts at night. Someone claiming to be ‘IT’ asks you to approve.",
      "story": "You receive repeated MFA prompts you did not initiate. Someone claiming to be IT then messages: ‘We are testing the system. Approve to stop the notifications.’",
      "options": [
        "I approve one prompt to stop the noise.",
        "I deny the prompts, report to IT and change my password through the official process."
      ],
      "correct": 1,
      "explanation": "This is MFA fatigue: pressure to obtain an accidental approval. Only confirm a login you started yourself. Do not follow links in the message. If you already approved, tell IT immediately."
    }
  ],
  "categories": [
    {
      "name": "Public",
      "label": "PUBLIC",
      "description": "Information intended for open distribution after the necessary checks and approval.",
      "examples": [
        "Published research",
        "Open dataset",
        "Press release"
      ],
      "rule": "Check the licence and terms. Publication does not remove copyright or applicable personal-data requirements."
    },
    {
      "name": "Internal",
      "label": "INTERNAL",
      "description": "Information about the institute’s internal work that is not intended for unrestricted distribution.",
      "examples": [
        "Internal correspondence",
        "Administrative minutes",
        "Work procedures"
      ],
      "rule": "Give access to authorised staff. External sharing follows the established approval process."
    },
    {
      "name": "Confidential",
      "label": "CONFIDENTIAL",
      "description": "Non-public information whose disclosure could affect research, partnerships or institutional interests.",
      "examples": [
        "Unpublished results",
        "Budgets",
        "Partner agreements"
      ],
      "rule": "Restrict permissions by role and need to know. Use approved encryption measures for storage and transfer."
    },
    {
      "name": "Personal data",
      "label": "PERSONAL DATA",
      "description": "Information about people who can be identified directly or through context and combined information.",
      "examples": [
        "CVs and contacts",
        "Event registrations",
        "CCTV footage"
      ],
      "rule": "Clarify purpose, legal basis, transparency, access and retention. Collect only what is necessary."
    },
    {
      "name": "Special categories",
      "label": "SPECIAL CATEGORY",
      "description": "Particularly sensitive data, for example about health, religious beliefs or genetic characteristics.",
      "examples": [
        "Health information",
        "Religious beliefs",
        "Biometrics for identification"
      ],
      "rule": "Consult the DPO in advance about the applicable conditions and safeguards. Dietary requirements may also reveal sensitive information."
    },
    {
      "name": "AI data",
      "label": "AI TRAINING DATA",
      "description": "Datasets for training, validating or testing models. They may also be personal, confidential or public.",
      "examples": [
        "Training corpus",
        "Validation dataset",
        "Test examples"
      ],
      "rule": "Document provenance, rights, transformations and versions. Review bias and applicable AI rules before use."
    },
    {
      "name": "Restricted",
      "label": "RESTRICTED",
      "description": "Information with tightly limited access for legal, contractual or security reasons.",
      "examples": [
        "Security investigations",
        "Privileged legal correspondence",
        "Embargoed results"
      ],
      "rule": "Access only on a demonstrated need-to-know basis with explicit approval. The training calls for involvement of the DPO and legal team."
    }
  ],
  "incidentData": {
    "device": [
      [
        "Make the first report immediately",
        "Notify IT and the DPO. Say that the device is lost or stolen; do not wait until Monday."
      ],
      [
        "Gather the known facts",
        "Device identifier, last known place and time, local files and any known encryption status."
      ],
      [
        "If stolen — notify the police",
        "File a report and give the reference number to the responsible team."
      ],
      [
        "Support the response teams",
        "IT assesses session blocking and remote wiping. The DPO assesses the affected data and notifications."
      ]
    ],
    "email": [
      [
        "Report without delay",
        "Contact IT and the DPO. Identify the unintended recipient, time, file sent and types of data."
      ],
      [
        "Request deletion",
        "Ask the unauthorised recipient not to use or forward the information and to delete it. This does not undo the incident."
      ],
      [
        "Limit access",
        "For a shared link, revoke incorrect permissions with the responsible team. Keep the correspondence for review."
      ],
      [
        "Follow the guidance",
        "Support the assessment. Next time, check the full address and use restricted work links."
      ]
    ],
    "phishing": [
      [
        "Stop interacting",
        "Do not open further links or enter codes or passwords. If you already did, tell IT."
      ],
      [
        "Report through a known channel",
        "Use the established phishing-reporting process and notify IT; involve the DPO if data is affected."
      ],
      [
        "Preserve the context",
        "Provide the sender, time and your actions. Follow instructions for supplying the message."
      ],
      [
        "Secure the account",
        "If you disclosed a password, change it through the official work process; IT assesses further action."
      ]
    ],
    "mfa": [
      [
        "Deny the prompt",
        "Do not confirm a login you did not start, even if someone claims to be IT."
      ],
      [
        "Report immediately",
        "Contact IT through a known work channel. State the times, frequency and whether you approved anything."
      ],
      [
        "Change your password safely",
        "Use the official account process. Do not open links from a suspicious message."
      ],
      [
        "Check with IT",
        "The team assesses active sessions and access. Involve the DPO if data may be at risk."
      ]
    ]
  },
  "quizQuestions": [
    {
      "question": "You are stepping into the kitchen for a minute. What do you do first?",
      "options": [
        "Leave everything as it is.",
        "Lock my screen and put confidential documents away.",
        "Close only the browser."
      ],
      "correct": 1,
      "explanation": "Even a short absence creates an opportunity for access. A locked screen and documents put away are everyday safeguards."
    },
    {
      "question": "A partner requests an event contact list for its own campaign.",
      "options": [
        "The partnership is sufficient grounds.",
        "I send it if the director is in a hurry.",
        "I first review the purpose and permissibility with the DPO."
      ],
      "correct": 2,
      "explanation": "Data is not automatically shared for a new purpose. Check the legal basis, roles, scope and terms before sending."
    },
    {
      "question": "What does removing names from a dataset establish?",
      "options": [
        "By itself, it does not establish that the dataset is anonymous.",
        "That GDPR no longer applies.",
        "That it can be published without assessment."
      ],
      "correct": 0,
      "explanation": "Codes, context and other available information may allow re-identification. An assessment of actual identifiability is needed."
    },
    {
      "question": "You receive a request for a copy of personal data. How do you respond?",
      "options": [
        "Immediately send every file I find.",
        "Forward it to the DPO immediately for checks and coordination.",
        "Ignore it if it comes from a former applicant."
      ],
      "correct": 1,
      "explanation": "The request needs coordinated handling: identity, scope and other people’s privacy must be checked. Do not ignore it."
    },
    {
      "question": "Your phone shows MFA prompts you did not initiate.",
      "options": [
        "Approve one so they stop.",
        "Turn notifications off and forget about them.",
        "Deny them and report to IT immediately."
      ],
      "correct": 2,
      "explanation": "Unsolicited prompts may be an MFA fatigue attack. Do not approve. Change your password through the official process and follow IT guidance."
    },
    {
      "question": "Your work laptop is stolen on Saturday. When do you report it?",
      "options": [
        "Immediately to IT and the DPO; also to the police if stolen.",
        "On Monday morning.",
        "After 72 hours if it has not been found."
      ],
      "correct": 0,
      "explanation": "Report immediately. The controller, with the DPO, assesses GDPR notification requirements; employees do not wait 72 hours."
    }
  ],
  "ui": {
    "case": "SCENARIO",
    "reviewed": "✓ Explored",
    "decide": "What would you do?",
    "question": "WHAT WOULD YOU DO?",
    "adapted": "Learning adaptation of",
    "right": "Exactly right.",
    "risk": "Let’s look at the risk.",
    "category": "CATEGORY",
    "protect": "HOW TO PROTECT IT",
    "quiz": "KNOWLEDGE CHECK",
    "correct": "A good decision.",
    "safer": "Here is the safer action.",
    "results": "See your results",
    "next": "Next question",
    "complete": "KNOWLEDGE CHECK COMPLETE",
    "perfect": "Small decisions are in good hands.",
    "good": "A solid foundation. Keep practising.",
    "learn": "Every situation is a chance to learn.",
    "exercise": "This is an exercise, not a certificate.",
    "apply": "Bring these habits into your working day.",
    "review": "Review the scenarios and explanations, then try again.",
    "retry": "Try again",
    "back": "Back to practical scenarios ↑",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "singular": "scenario",
    "plural": "scenarios",
    "explore": "to explore"
  }
};
