import React from "react";

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ Item 1 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is Grapes Freelance Task Marketplace?
        </div>
        <div className="collapse-content">
          <p>
            Grapes is an online platform where individuals and businesses can
            post tasks and hire freelancers to complete them. It also allows
            freelancers to find work opportunities that match their skills and
            interests.
          </p>
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How do I create an account on Grapes?
        </div>
        <div className="collapse-content">
          <p>
            You can sign up using your email and password or quickly register
            with your Google account. Just click the Signup button on the
            navigation bar and follow the instructions.
          </p>
        </div>
      </div>

      {/* FAQ Item 3 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Is it free to use Grapes?
        </div>
        <div className="collapse-content">
          <p>
            Yes! Creating an account and browsing tasks is completely free.
            However, specific tasks may involve costs based on the budget set by
            clients.
          </p>
        </div>
      </div>

      {/* FAQ Item 4 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How can I post a new task?
        </div>
        <div className="collapse-content">
          <p>
            To post a new task:
            <ul className="list-disc pl-6 mt-2">
              <li>Log in to your account.</li>
              <li>Click "Add Task" on the navigation bar.</li>
              <li>
                Fill in details like task title, category, description, deadline
                and budget.
              </li>
              <li>Submit the form, and your task will be live!</li>
            </ul>
          </p>
        </div>
      </div>

      {/* FAQ Item 5 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Who can bid on my task?
        </div>
        <div className="collapse-content">
          <p>
            Any registered freelancer on Grapes can view your task and place a
            bid if they’re interested and qualified.
          </p>
        </div>
      </div>

      {/* FAQ Item 6 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Can I edit or delete my posted tasks?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! Go to My Posted Tasks after logging in. There, you can
            edit or delete any tasks you’ve created.
          </p>
        </div>
      </div>

      {/* FAQ Item 7 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does bidding work?
        </div>
        <div className="collapse-content">
          <p>
            Freelancers submit a bid to express interest in a task. The bid
            count increases each time someone bids. Clients can then review bids
            and choose the best fit for their project.
          </p>
        </div>
      </div>

      {/* FAQ Item 8 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Is Grapes available on mobile devices?
        </div>
        <div className="collapse-content">
          <p>
            Yes! Grapes is fully responsive and works beautifully on mobile,
            tablet, and desktop devices.
          </p>
        </div>
      </div>

      {/* FAQ Item 9 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Does Grapes support dark mode?
        </div>
        <div className="collapse-content">
          <p>
            Yes! You can switch between dark and light themes for a comfortable
            viewing experience.
          </p>
        </div>
      </div>

      {/* FAQ Item 10 */}
      <div className="collapse collapse-arrow bg-white dark:bg-gray-700 dark:text-white mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How can I contact support?
        </div>
        <div className="collapse-content">
          <p>
            If you need assistance, feel free to email us at
            <span className="text-primary font-semibold">
              {" "}
              support@grapestask.com
            </span>{" "}
            or call{" "}
            <span className="text-primary font-semibold">+880-1602-944969</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
