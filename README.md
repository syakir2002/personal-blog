# UniVent System 🏫✨

> **Centralized University Event Management Platform** > Developed as an official Final Year Project (FYP) for the Bachelor of Computer Science (Honours) at Universiti Sultan Zainal Abidin (UniSZA).

---

## 📌 Project Overview
The **UniVent System** is engineered to resolve the fragmentation, scheduling conflicts, and manual delays traditionally associated with managing university venue bookings and student organization events. 

Built with a robust full-stack architecture using **PHP (CodeIgniter)** and **Bootstrap 5**, the platform provides a seamless digital interface for event organizers while introducing an automated, intelligent pipeline to ease administrative workflows.

---

## 🧠 Core Feature: Rule-Based Decision Support System (DSS)
The defining highlight of UniVent is its backend **Decision Support System**. Instead of relying on administrators to manually review constraint criteria, the system evaluates logical rules the moment an event organizer initiates a booking request.

### 🛡️ Automated Computational Rules Pipeline:
The backend instantly validates inputs against structural constraints using deterministic conditional logic:

* **Rule 1 (Venue Status Checking):** Assesses if the requested venue is under maintenance or active.
* **Rule 2 (Capacity Filtering):** Validates if `Expected_Attendance` $\le$ `Venue_Maximum_Capacity`.
* **Rule 3 (Temporal Conflict Resolution):** Runs date/time matrix queries to guarantee zero clashing schedules for the same location.

> ⚡ **Outcome:** If all automated logic rules pass safely, the application status flags itself as `Auto-Validated; Pending Admin Approval`. This transforms the administrator’s workspace into a streamlined, one-click verification checkpoint.

---

## 🛠️ Tech Stack & Architecture
* **Backend Framework:** PHP (CodeIgniter)
* **Frontend UI Layout:** HTML5, CSS3, JavaScript, Bootstrap 5
* **Database Management:** MySQL (Relational Schema Design)
* **Icons & Assets:** FontAwesome v6

---

## 🗃️ Database Architecture (Key Tables)
The relational system relies on structured relational database tracking to enforce transactional consistency across scheduling pipelines:

| Table Name | Description | Key Fields Included |
| :--- | :--- | :--- |
| `users` | Stores system access controls for users | `id`, `name`, `email`, `password`, `role` *(Admin/Organizer)* |
| `venues` | Contains physical venue capacities & parameters | `venue_id`, `venue_name`, `max_capacity`, `status` |
| `bookings` | Tracks event pipelines and automated validation states | `booking_id`, `organizer_id`, `venue_id`, `start_time`, `end_time`, `status` |

---

## 🖥️ System Interface Workflows
1. **Organizer Module:** Allows authorized student bodies to submit comprehensive event applications, pick available venues, and receive instant feedback if a capacity or time conflict occurs.
2. **Administrator Dashboard:** A control center showing system-validated approvals, allowing personnel to issue official authorization overrides instantly.

---

## 🔧 Local Setup & Installation Instructions

If you wish to host and audit this codebase environment locally, follow these steps:

1. **Clone the Repository:**
   ```bash
      git clone [https://github.com/yourusername/univent-system.git](https://github.com/yourusername/univent-system.git)