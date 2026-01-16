const ContactInfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex gap-4">
    <div className="shrink-0">
      <Icon className="h-6 w-6 text-blue-400" />
    </div>
    <div>
      <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default ContactInfoItem;
